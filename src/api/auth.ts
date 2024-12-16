import { AccessTokenKey } from '../constants/commonConstants';
import { LoginRequestDto, LoginResponseDto, RegistrationRequestDto } from '../types/apiTypes';
import { AxiosInstance } from './axiosInstance';

export const AuthApi = () =>{
    const {axiosPost} = AxiosInstance();

    const signIn = async(loginData: LoginRequestDto) => {
        const data = await axiosPost('Auth/login', loginData) as LoginResponseDto;
        sessionStorage.setItem(AccessTokenKey, data.accesToken);
        return data;
    }

    const signUp = async(registrationData: RegistrationRequestDto) => 
        await axiosPost('Auth/register', registrationData) as void;

    return  {
        signIn,
        signUp
    }
}
