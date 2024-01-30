
import RegisterForm from '@/app/ui/reg-form';

export default function Register() {
    return     <main className="items-center justify-center md:h-screen">
    <div className="relative mx-auto flex w-full flex-col space-y-2.5 p-4 md:-mt-32">
      <div className="flex h-20 w-full items-end rounded-lg bg-white-500 p-3 md:h-36">
        <div className="w-32 text-black md:w-36">
        </div>
      </div>
      <RegisterForm  />
    </div>
  </main>;
  }