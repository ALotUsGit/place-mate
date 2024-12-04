import { useState } from "react";
import MainComponent from "../../components/MainComponent";
import Button from "../../components/ui/Button";
import { Input, InputLabel, InputWrap } from "../../components/ui/Input";
import useInput from "../../hooks/useInput";
import { email_regex } from "../../utils/regex";

const FindPassword = () => {
  const [email, onChangeEmail] = useInput("");
  const [emailErr, setEmailErr] = useState(false);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isEmailValid = email_regex.test(email);

    // [임시] 로그인 기능 구현 시 수정 예정
    setEmailErr(!isEmailValid);
  };

  return (
    <MainComponent className="flex max-w-[30rem] flex-col items-center justify-center gap-9 px-0">
      <h2 className="text-xl font-bold">비밀번호 찾기</h2>
      <form className="w-full" onSubmit={onSubmitHandler}>
        <InputWrap>
          <Input
            placeholder="이메일을 입력하세요."
            onChange={onChangeEmail}
            variant={emailErr ? "error" : "default"}
            value={email.trim()}
          />
          {emailErr && (
            <InputLabel variant="error">가입된 이메일이 없습니다.</InputLabel>
          )}
        </InputWrap>

        <p className="mb-9 mt-4 text-gray-600">
          가입된 이메일로 임시 비밀번호를 전송해 드립니다. <br />
          로그인 후 반드시 비밀번호를 변경해 주세요.
        </p>

        <Button
          type="submit"
          variant="secondary"
          size="lg"
          disabled={!email.trim()}
        >
          임시 비밀번호 전송
        </Button>
      </form>
    </MainComponent>
  );
};
export default FindPassword;
