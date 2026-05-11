"use client"
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter  } from "next/navigation";

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

const formSchema = z.object({
        name: z
            .string()
            .min(5, "Bug title must be at least 5 characters.")
            .max(32, "Bug title must be at most 32 characters."),
        address: z
            .string()
            .min(20, "Description must be at least 20 characters.")
            .max(100, "Description must be at most 100 characters."),
        phone: z
        .string()
        .regex(/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/, 
            "Please enter a valid phone number")
        .max(15, "Phone must be at most 15 characters"),
        email: z
        .string()
        .email("Please enter a valid email address")
        .min(1, "Email is required")
        .max(100, "Email must be less than 100 characters"),
        postalCode: z
        .string()
        .min(1, "Postal code is required")
        .max(10, "Postal code must be at most 10 characters")
        .regex(
            /^[A-Za-z0-9\s\-]{3,10}$/,
            "Please enter a valid postal code (letters, numbers, spaces, and hyphens only)"
        )
})

interface ShippingFormProps {
    setShippingForm: (data: z.infer<typeof formSchema>) => void
}

export default function ShippingForm({ setShippingForm }: ShippingFormProps) {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema as any),
        defaultValues: {
          name: "",
          address: "",
          phone: "",
          email: "",
          postalCode: "",
        },
    })

  function onSubmit(data: z.infer<typeof formSchema>) {
    setShippingForm(data);
    router.push("/cart?step=3", {scroll: false})
  }
    
    
    return <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)} className="px-5 py-7">
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-name">
                    <p className="text-sm text-gray-600">Name:</p>
                  </FieldLabel>
                  <Input
                    {...field}
                    id="name"
                    aria-invalid={fieldState.invalid}
                    placeholder=""
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="address"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-address">
                    <p className="text-sm text-gray-600">Your Address</p>
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="address"
                      placeholder="Enter your current address"
                      className="min-h-24 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {field.value.length}/100 characters
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldDescription>
                    Please note that goods purchased from OCTO will be delivered to this address
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-phone">
                    <p className="text-sm text-gray-600">Phone</p>
                  </FieldLabel>
                  <Input
                    {...field}
                    id="phone"
                    aria-invalid={fieldState.invalid}
                    inputMode="numeric"
                    placeholder="+123 234-456-789"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-email">
                    <p className="text-sm text-gray-600">Email</p>
                  </FieldLabel>
                  <Input
                    {...field}
                    id="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="@email.com"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="postalCode"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-postalCode">
                    <p className="text-sm text-gray-600">Postal Code</p>
                  </FieldLabel>
                  <Input
                    {...field}
                    id="postalCode"
                    aria-invalid={fieldState.invalid}
                    inputMode="numeric"
                    placeholder="123456789"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        <button
            type="submit"
            className="w-full cursor-pointer hover:bg-black/60 transition-all duration-300 rounded-sm bg-black py-2 text-md font-semibold flex items-center  justify-center text-white gap-5 mt-8">
            Next &rarr;
        </button>
    </form>
};
