import { AuthService } from 'src/auth/service/auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginDto: {
        email: string;
        senha: string;
    }): Promise<{
        access_token: string;
    }>;
}
