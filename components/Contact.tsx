"use client";

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeClosedIcon, HomeIcon, FileIcon } from "@radix-ui/react-icons";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = () => {
    
    if (!form.current) {
        console.error('Form reference is null');
        return;
      }
   
    emailjs
      .sendForm('service_tldv0ba', 'template_n314jm9', form.current!, {
        publicKey: 'ZYsFQxAoL-y-JRcX4',
        
        limitRate:{
            throttle: 100000, // can't send more than one email per 100s
          }
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email Sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Email Not Sent')
        },
      );
  };

  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        {/*@ts-expect-error: Typography error  */ }
        <Typography variant="h1" color="blue-gray" className="mb-4" >
          Contact Me
        </Typography>
        {/*@ts-expect-error: Typography error */}
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"  >
          Ready to get started? Feel free to reach out to me through the contact form,
          and let&apos;s embark on a journey of innovation.
        </Typography>
      </div>
      <div>
        {/*@ts-expect-error: Typography error */}
        <Card shadow={true} className="container mx-auto border border-gray/50" >
        {/*@ts-expect-error: Typography error */}
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10" placeholder={undefined}>
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              {/*@ts-expect-error: Typography error */}
              <Typography variant="h4" color="white" className="mb-2" placeholder={undefined} >
                Contact Information
              </Typography>
              {/*@ts-expect-error: Typography error */}
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500" >
                Fill up the form and I will get back to you within 24
                hours.
              </Typography>
              <div className="flex gap-5">
                <HomeIcon className="h-6 w-6 text-white" />
                {/*@ts-expect-error: Typography error */}
                <Typography variant="h6" color="white" className="mb-2" >
                  +256(782) 726 885
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeClosedIcon className="h-6 w-6 text-white" />
                {/*@ts-expect-error: Typography error */}
                <Typography variant="h6" color="white" className="mb-2" >
                  nassozimariam5@gmail.com
                </Typography>
              </div>
              <div className="flex mb-10 gap-5">
                <FileIcon className="h-6 w-6 text-white" />
                {/*@ts-expect-error: Typography error */}
                <Typography variant="h6" color="white" className="mb-2" >
                  Open Support Ticket
                </Typography>
              </div>
              <div className="flex items-center gap-5">
                {/*@ts-expect-error: Typography error */}
                <IconButton variant="text" color="white" >
                  <i className="fa-brands fa-facebook text-lg" />
                </IconButton>
                {/*@ts-expect-error: Typography error */}
                <IconButton variant="text" color="white" >
                  <i className="fa-brands fa-instagram text-lg" />
                </IconButton>
                {/*@ts-expect-error: Typography error */}
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-github text-lg" />
                </IconButton>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
                {/*onSubmit={sendEmail} */}
              <form action={sendEmail} ref={form} >
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  {/*@ts-expect-error: Typography error */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="First Name"
                    name="to_name"
                    placeholder="eg. Lucas"
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  {/*@ts-expect-error: Typography error */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Last Name"
                    name="last-name"
                    placeholder="eg. Jones"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                {/*@ts-expect-error: Typography error */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  name="from_name"
                  type="email"
                  placeholder="eg. lucas@mail.com"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                {/*@ts-expect-error: Typography error */}
                <Typography
                  variant="lead"
                  className="!text-blue-gray-500 text-sm mb-2" >
                  What are you interested on?
                </Typography>
                <div className="-ml-3 mb-14 ">
                  {/*@ts-expect-error: Typography error */}
                  <Radio
                    color="gray"
                    name="type"
                    label="Design"
                    defaultChecked
                  />
                  {/*@ts-expect-error: Typography error */}
                  <Radio color="gray" name="type" label="Development" />
                  {/*@ts-expect-error: Typography error */}
                  <Radio color="gray" name="type" label="Support" />
                  {/*@ts-expect-error: Typography error */}
                  <Radio color="gray" name="type" label="Other" />
                </div>
                {/*@ts-expect-error: Typography error */}
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Your Message"
                  name="message"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <div className="w-full flex justify-end">
                  {/*@ts-expect-error: Typography error */}
                  <Button className="w-full md:w-fit" color="gray" type='submit' size="md" >
                    Send message
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Contact;