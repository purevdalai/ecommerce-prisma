"use client";

import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SIGN_IN_DEFAULT_VALUES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signInWithCredentials } from "@/lib/actions/user.actions";
import { useFormStatus } from "react-dom";

const CredentialsSignInForm = () => {
	const [data, action] = useActionState(signInWithCredentials, {
		success: false,
		message: "",
	});

	const SignInButton = () => {
		const { pending } = useFormStatus();
		return (
			<Button
				className="w-full"
				variant={"default"}
				type="submit"
				disabled={pending}
			>
				{pending ? "Signing in..." : "Sign In"}
			</Button>
		);
	};

	return (
		<form action={action}>
			<div className="space-y-6">
				<div>
					<Label htmlFor="email">Email</Label>
					<Input
						required
						type="email"
            name='email'
						id="email"
						autoComplete="email"
						defaultValue={SIGN_IN_DEFAULT_VALUES.email}
					/>
				</div>
				<div>
					<Label htmlFor="password">Password</Label>
					<Input
						required
						type="password"
            name='password'
						id="password"
						autoComplete="password"
						defaultValue={SIGN_IN_DEFAULT_VALUES.password}
					/>
				</div>
				<div>
					<SignInButton />
				</div>
				{data && !data.success && (
					<div className="text-center text-destructive">{data.message}</div>
				)}
				<div className="text-sm text-center text-muted-foreground">
					Don&apos;t have an account?{" "}
					<Link href="/sign-up" target="_self" className="link">
						Sign Up
					</Link>
				</div>
			</div>
		</form>
	);
};
export default CredentialsSignInForm;
