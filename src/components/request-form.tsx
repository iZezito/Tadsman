'use client';
import React from 'react';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import KeyValueInput from './key-value';
import { RequestFormValues, formSchema } from '@/types';
import {sendRequest} from '../../actions';
import { useResponseStore } from '@/store/responseStore';

const RequestForm = () => {
  const setResponse = useResponseStore((state) => state.setResponse);
  const setLoading = useResponseStore((state) => state.setLoading);
  const { control, handleSubmit, watch, formState: { errors } } = useForm<RequestFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      method: 'get',
      url: '',
      headers: [],
      bodyType: 'none',
      bodyContent: '',
      formData: [],
      params: [],
    },
  });

  const { fields: headerFields, append: appendHeader, remove: removeHeader } = useFieldArray({
    control,
    name: 'headers',
  });

  const { fields: formDataFields, append: appendFormData, remove: removeFormData } = useFieldArray({
    control,
    name: 'formData',
  });

  const { fields: paramFields, append: appendParam, remove: removeParam } = useFieldArray({
    control,
    name: 'params',
  });

  const onSubmit = async (data: RequestFormValues) => {
    try {
      setLoading(true);
      const response = await sendRequest(data);
      setResponse(response);
    } catch (error) {
      setResponse({ success: false, error: (error as Error).message });
    } finally {
      setLoading(false);
    }
  };

  const bodyType = watch('bodyType');

  return (
    <Card>
      <CardHeader>
        <CardTitle>API Request</CardTitle>
        <CardDescription>Create and send API requests to test your endpoints. Boa tarde, Neymar</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2">
              <Controller
                name="method"
                control={control}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select method..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="get">GET</SelectItem>
                        <SelectItem value="post">POST</SelectItem>
                        <SelectItem value="put">PUT</SelectItem>
                        <SelectItem value="patch">PATCH</SelectItem>
                        <SelectItem value="delete">DELETE</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.method && (
                <span className="text-red-600 text-sm">{errors.method.message}</span>
              )}
              <Controller
                name="url"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    placeholder="https://api.example.com/endpoint"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                )}
              />
              {errors.url && (
                <span className="text-red-600 text-sm">{errors.url.message}</span>
              )}
              <Button type="submit">Send</Button>
            </div>
            <Tabs defaultValue="headers">
              <TabsList>
                <TabsTrigger value="params">Params</TabsTrigger>
                <TabsTrigger value="body">Body</TabsTrigger>
                <TabsTrigger value="auth">Authentication</TabsTrigger>
                <TabsTrigger value="headers">Headers</TabsTrigger>
              </TabsList>
              <TabsContent value="params">
                <div className="grid gap-2">
                  {paramFields.map((field, index) => (
                    <KeyValueInput<RequestFormValues>
                      key={field.id}
                      name="params"
                      control={control}
                      index={index}
                      remove={removeParam}
                      error={errors.params?.[index]}
                    />
                  ))}
                  <Button type="button" onClick={() => appendParam({ key: '', value: '' })}>
                    Add Param
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="headers">
                <div className="grid gap-2">
                  {headerFields.map((field, index) => (
                    <KeyValueInput<RequestFormValues>
                      key={field.id}
                      name="headers"
                      control={control}
                      index={index}
                      remove={removeHeader}
                      error={errors.headers?.[index]}
                    />
                  ))}
                  <Button type="button" onClick={() => appendHeader({ key: '', value: '' })}>
                    Add Header
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="body">
                <div className="grid gap-2">
                  <Controller
                    name="bodyType"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup {...field} className="flex flex-col gap-2" onValueChange={field.onChange}>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="none" id="none" />
                          <Label htmlFor="none">None</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="json" id="json" />
                          <Label htmlFor="json">JSON</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="formdata" id="formdata" />
                          <Label htmlFor="formdata">Form Data</Label>
                        </div>
                      </RadioGroup>
                    )}
                  />
                  {bodyType === 'json' && (
                    <Controller
                      name="bodyContent"
                      control={control}
                      render={({ field }) => (
                        <>
                          <Textarea
                            {...field}
                            placeholder="JSON body content"
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
                          />
                          {errors.bodyContent && (
                            <span className="text-red-600 text-sm">{errors.bodyContent.message}</span>
                          )}
                        </>
                      )}
                    />
                  )}
                  {bodyType === 'formdata' && (
                    <div className="grid gap-2">
                      {formDataFields.map((field, index) => (
                        <KeyValueInput<RequestFormValues>
                          key={field.id}
                          name="formData"
                          control={control}
                          index={index}
                          remove={removeFormData}
                          error={errors.formData?.[index]}
                        />
                      ))}
                      <Button type="button" onClick={() => appendFormData({ key: '', value: '' })}>
                        Add Form Data
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default RequestForm;

