import {createClient} from "@supabase/supabase-js";

export const client = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export async function requestPasswordReset(email) {
    return await client.auth.resetPasswordForEmail(email, {redirectTo: "http://localhost:3000/reset-password"});
}

export async function resetPassword(token, password) {
    return await client.auth.updateUser({password: password});
}

export async function signUp(email, password) {
    return await client.auth.signUp({email: email, password: password});
}

export async function login(email, password) {
    return await client.auth.signInWithPassword({email: email, password: password});
}

export async function getSession() {
    await client.auth.refreshSession();
    return await client.auth.getSession();
}

export async function getUserProfile(userId) {
    return await client.from("profiles").select("*").eq("id", userId).single();
}