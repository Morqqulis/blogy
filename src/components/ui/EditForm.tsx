// EditForm.tsx
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@ui/form'
import { Input } from '@ui/input'
import { z } from 'zod'
import useMainStore from '../../stores/store'
import { Textarea } from '@ui/textarea'

export const formSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  img: z.string().min(1, { message: 'Image is required' }),
  desc: z.string().min(1, { message: 'Description is required' })
})

interface FormData {
  title: string
  img: string
  desc: string
}

const EditForm: React.FC = (): JSX.Element => {
  const addArticle = useMainStore((state) => state.addArticle)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      img: '',
      desc: ''
    }
  })

  const onSubmit = (data: FormData) => {
    const newArticle = {
      id: Date.now(), // Уникальный ID
      ...data
    }

    addArticle(newArticle)
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
                <Input id="img" placeholder="Image URL" type="text" {...field} />
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
    </Form>
  )
}

export default EditForm
