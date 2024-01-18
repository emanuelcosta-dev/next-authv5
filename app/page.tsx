import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-slate-900">
      <div className="space-y-6">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          Auth
        </h1>
        <p className="text-white text-lg">Next Authentication service</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
