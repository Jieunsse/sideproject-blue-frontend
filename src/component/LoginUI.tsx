import { Input, Button } from '@nextui-org/react';
import Blue from '../assets/Blue.svg?react';
import { useState } from 'react';

const LoginUI = () => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleLogin = () => {};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <Blue className="w-40 ml-28 mb-4" />

        <form className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              아이디
            </label>
            <Input
              type="email"
              placeholder="아이디를 입력하세요"
              className="mt-2"
              onChange={e => setUserId(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              비밀번호
            </label>
            <Input
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="mt-2"
              onChange={e => setUserPassword(e.target.value)}
            />
          </div>

          <div>
            <Button
              type="submit"
              onClick={handleLogin}
              className="w-full flex justify-center py-2 px-4 rounded-md text-medium font-medium text-white mt-10"
              color="primary"
              variant="solid"
            >
              로그인
            </Button>
          </div>
        </form>
        <div className="mt-8 flex items-center justify-between">
          <div className="text-sm">
            <a
              href="/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              회원가입
            </a>
          </div>
          <div className="text-sm">
            <a
              href="/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              아이디/비밀번호 찾기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUI;

{
  /*

 <div className="flex w-80 flex-wrap md:flex-nowrap gap-4">
        <Input type="email" label="Email" placeholder="Enter your email" />
      </div>
      <div className="flex w-80 flex-wrap md:flex-nowrap gap-4 mt-2">
        <Input
          type="password"
          label="Password"
          placeholder="Enter your password"
        />
      </div>


*/
}
