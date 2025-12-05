"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  eventName: z.string().min(2, {
    message: "Event name must be at least 2 characters.",
  }),
  eventType: z.string().min(1, {
    message: "Please select an event type.",
  }),
  date: z.date({
    message: "Please select a date for the event.",
  }),
  expectedGuests: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Expected guests must be a positive number.",
  }),
  contactName: z.string().min(2, {
    message: "Contact name must be at least 2 characters.",
  }),
  contactEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
  contactPhone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
})

type FormValues = z.infer<typeof formSchema>

export function EventPlanningForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventName: "",
      eventType: "",
      expectedGuests: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      description: "",
    },
  })

  function onSubmit(values: FormValues) {
    console.log(values)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      form.reset()
    }, 3000)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-6">
          <p className="text-muted-foreground text-center">
            Fill out the details below and we&apos;ll help make your event memorable.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="eventName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Birthday Celebration" className="bg-background/50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="eventType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full bg-background/50">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="birthday">Birthday Party</SelectItem>
                      <SelectItem value="corporate">Corporate Event</SelectItem>
                      <SelectItem value="sports">Sports Viewing Party</SelectItem>
                      <SelectItem value="rehearsal">Rehearsal Dinner</SelectItem>
                      <SelectItem value="graduation">Graduation Party</SelectItem>
                      <SelectItem value="reunion">Reunion</SelectItem>
                      <SelectItem value="fundraiser">Fundraiser</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Event Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal justify-start bg-background/50",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                          <CalendarIcon className="ml-auto size-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="expectedGuests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expected Guests</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="25" className="bg-background/50" {...field} />
                  </FormControl>
                  <FormDescription>We can accommodate up to 100 guests</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-primary">Contact Information</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="contactName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" className="bg-background/50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@example.com" className="bg-background/50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="contactPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+1 (555) 123-4567" className="bg-background/50" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-primary">Event Details</h3>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Tell us more about your event - special requirements, food preferences, themes, or any other details..."
                    className="min-h-32 resize-none bg-background/50"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Include any dietary restrictions or special accommodations needed</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-3 pt-4">
          <Button type="button" variant="outline" onClick={() => form.reset()} className="flex-1">
            Clear Form
          </Button>
          <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90" disabled={isSubmitted}>
            {isSubmitted ? "Request Sent!" : "Submit Event Request"}
          </Button>
        </div>
      </form>
    </Form>
  )
}
