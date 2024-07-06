// EditForm.tsx
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@ui/form'
import { Input } from '@ui/input'
import { Textarea } from '@ui/textarea'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import useMainStore from '../../stores/store'
import { Toaster } from './toaster'
import { useToast } from './use-toast'

export const formSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  img: z.instanceof(File).refine((file) => file.size <= 5000000, 'Image must be less than 5MB'), // Validate file size
  desc: z.string().min(1, { message: 'Description is required' })
})

interface FormData {
  title: string
  img: File | null
  desc: string
}

const EditForm: React.FC = (): JSX.Element => {
  const { addArticle, articles } = useMainStore()

  const { toast } = useToast()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      img: null,
      desc: ''
    }
  })

  const onSubmit = (data: FormData) => {
    const reader = new FileReader()
    reader.onload = () => {
      const base64Image = reader.result as string

      const newArticle = {
        id: articles.length + 1,
        title: data.title,
        img: base64Image,
        desc: data.desc
      }

      addArticle(newArticle)
      toast({
        description: 'Article added successfully',
        title: 'Success'
      })

      reset()
    }
    reader.readAsDataURL(data.img as File)
  }

  return (
    <Form {...useForm()}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Title</FormLabel>
              <FormControl>
                <Input id="title" placeholder="Set title" type="text" {...field} />
              </FormControl>
              <FormDescription>This is the title for the article</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="img"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Image</FormLabel>
              <FormControl>
                <Input
                  id="img"
                  type="file"
                  accept="image/*"
                  onChange={(e) => field.onChange(e.target.files ? e.target.files[0] : null)}
                />
              </FormControl>
              <FormDescription>This is the image for the article</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="desc"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Description</FormLabel>
              <FormControl>
                <Textarea id="desc" placeholder="Set description" {...field} />
              </FormControl>
              <FormDescription>This is the description for the article</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
      <Toaster />
    </Form>
  )
}

export default EditForm
