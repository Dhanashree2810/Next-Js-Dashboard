'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import bg from '@/app/login_bg_image.jpg';
import { userSchema } from '@/app/validationSchema';
import Link from 'next/link';

export default function Home() {
  const router = useRouter(); // Initialize the router
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });


  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const result = userSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        email: fieldErrors.email ? fieldErrors.email[0] : '',
        password: fieldErrors.password ? fieldErrors.password[0] : '',
      });
    } else {
      setErrors({ email: '', password: '' });
      alert("Login Successfully");
      router.push('/dashboard'); // Navigate to '/dashboard'
      console.log(result);
      
    }
  };

  return (
    <div className='container max-w-full p-0'>
      {/* banner */}
      <div className="py-20 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${bg.src})` }}>
        <div className="container py-28 flex justify-center items-center">
          <Card className="grid grid-cols-1 h-1/4 w-2/6">
            <CardHeader>
              <CardTitle className='text-center underline'>Login Form</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>

              <form onSubmit={handleSubmit}>

                <div className="grid w-full items-center gap-4">

                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email :</Label>
                    <Input type='email' id="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} />
                    {errors.email && <p className='text-red-600 text-xs'>{errors.email}</p>}
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password :</Label>
                    <Input type='password' id="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} />
                    {errors.password && <p className=' text-red-600 text-xs'>{errors.password}</p>}
                  </div>
                </div>
                <CardFooter className="flex justify-between mt-4">
                  {/* <Link href='/dashboard'></Link> */}
                  <Button type="submit">Login</Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
