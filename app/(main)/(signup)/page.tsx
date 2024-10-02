"use client";
import Link from "next/link";
import { useState, useTransition } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { ZRegisterSchema } from "@/lib/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormInvalid } from "@/components/form-invalid";

export default function LoginPage() {
  const [error, setError] = useState<string | undefined>("");

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ZRegisterSchema>>({
    resolver: zodResolver(ZRegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ZRegisterSchema>) => {
    startTransition(() => {});
  };

  return (
    <div className="flex justify-center h-screen items-center ">
      <div className="h-[600px] w-96 bg-gray-100 border-2 rounded-xl p-6">
        <p className="text-center font-medium text-2xl">Register Form</p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 mb-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="h-24">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="Example"
                      type="Name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="h-24">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="jhon@example.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="h-24">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder="*****"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {error && <FormInvalid message={error} isInvalid />}

            <Button disabled={isPending} type="submit" className="w-full">
              Register
            </Button>
          </form>
        </Form>

        <div className="flex gap-3">
          <Button className="w-full" variant="outline" size="lg">
            <FcGoogle />
          </Button>

          <Button className="w-full" variant="outline" size="lg">
            <FaGithub />
          </Button>
        </div>
        <div className="flex justify-center">
          <Button variant="link" size="lg" asChild>
            <Link href="/login">Do you have an account?</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
