export interface User {
    id: number;
    email: string;
    user_name: string;
    password: string;
    profile_img?: any;
    wins?: number;
    total_matches?: number
}