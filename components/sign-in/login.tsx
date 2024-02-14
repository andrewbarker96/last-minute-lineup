import Link from "next/link";
import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Grid } from "@mui/material";
import Item from "@mui/material/Grid";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/login?message=Check email to continue sign in process");
  };

  return (
    <Grid container spacing={2} className="login-container">
      <Grid item xs={12} sm={12} md={12}>
        <Link
          href="/"
          className="rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
          style={{ color: "#BA75FF" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>{" "}
          Back
        </Link>
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <Item>
          <form
            className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
            action={signIn}
          >

            <label htmlFor="email">
              Email
            </label>
            <input
              type='text'
              id='email'
              name="email"
              placeholder="test@example.com"
              required
            />

            <label htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id='password'
              name="password"
              placeholder="••••••••"
              required
            />

            <button className="main-button">
              Login
            </button>

            <button className="alt-button" formAction={signUp}>
              Create Account
            </button>

            {searchParams?.message && (
              <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                {searchParams.message}
              </p>
            )}
          </form>
        </Item>
      </Grid>
    </Grid>
  );
}
