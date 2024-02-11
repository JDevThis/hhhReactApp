
import RegisterForm from '@/app/ui/register/reg-form';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Register',
};
export default function Register() {
    return     <main className="items-center justify-center md:h-screen">
    <div className="relative mx-auto flex w-full flex-col space-y-2.5 p-4 md:-mt-32">
      <RegisterForm  />
    </div>
  </main>;
  }