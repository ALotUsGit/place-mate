import { Link, useNavigate } from "react-router-dom";
import MainComponent from "../../components/MainComponent";
import Button from "../../components/ui/Button";
import { Input, InputLabel, InputWrap } from "../../components/ui/Input";
import { useState } from "react";
import { email_regex, pw_regex } from "../../utils/regex";
import useInput from "../../hooks/useInput";

const SignIn = () => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const navigate = useNavigate();

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isEmailValid = email_regex.test(email);
    const isPasswordValid = pw_regex.test(password);

    // [임시] 로그인 기능 구현 시 수정 예정
    setEmailErr(!isEmailValid);
    setPasswordErr(!isPasswordValid);

    if (isEmailValid && isPasswordValid) navigate("/");
  };

  return (
    <MainComponent className="flex max-w-[30rem] flex-col items-center justify-center gap-9 px-0">
      <form className="flex w-full flex-col gap-4" onSubmit={onSubmitHandler}>
        <InputWrap>
          <Input
            placeholder="이메일을 입력하세요."
            onChange={onChangeEmail}
            variant={emailErr ? "error" : "default"}
            value={email}
          />
          {emailErr && (
            <InputLabel variant="error">가입된 이메일이 없습니다.</InputLabel>
          )}
        </InputWrap>
        <InputWrap>
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요."
            maxLength={15}
            onChange={onChangePassword}
            variant={passwordErr ? "error" : "default"}
            value={password}
          />
          {passwordErr && (
            <InputLabel variant="error">비밀번호를 확인해 주세요.</InputLabel>
          )}
        </InputWrap>
        <Button
          type="submit"
          variant="secondary"
          size="lg"
          disabled={!email || !password}
        >
          SIGN IN
        </Button>
      </form>

      <Link to="/findPassword" className="text-gray-600 hover:text-gray-700">
        비밀번호 찾기
      </Link>

      <Link to="/signup" className="w-full">
        <Button variant="primary" size="lg">
          신규가입
        </Button>
      </Link>

      <div className="flex w-full flex-wrap gap-y-1 gap-x-4 rounded-md bg-gray-100 px-4 py-3">
        <p className="w-full font-medium text-sm text-gray-500">테스트 이메일 및 비밀번호</p>
        <p className="text-sm text-gray-500">이메일 : placemate@sample.com</p>
        <p className="text-sm text-gray-500">비밀번호 : 1234@place</p>
      </div>
    </MainComponent>
  );
};
export default SignIn;
