"use client";

import { FC } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SIGN_IN_DEFAULT_VALUES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ICredentialsSignInFormProps {}

const CredentialsSignInForm: FC<ICredentialsSignInFormProps> = ({}) => {
	return (
		<form>
			<div className="space-y-6">
				<div>
					<Label htmlFor="email">Email</Label>
					<Input
						required
						type="email"
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
						id="password"
						autoComplete="password"
						defaultValue={SIGN_IN_DEFAULT_VALUES.password}
					/>
				</div>
				<div>
					<Button className="w-full" variant={"default"} type="submit">
						Sign In
					</Button>
				</div>
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
