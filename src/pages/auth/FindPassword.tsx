import MainComponent from "../../components/MainComponent";
import Button from "../../components/form/Button";
import { Input } from "../../components/form/Input";

const FindPassword = () => {
  return (
    <MainComponent className="flex max-w-[30rem] flex-col items-center justify-center gap-9">
      <h2 className="text-xl font-bold">비밀번호 찾기</h2>
      <form action="" className="w-full">
        <Input placeholder="이메일을 입력하세요." />

        <p className="mb-9 mt-4 text-gray-600">
          가입된 이메일로 임시 비밀번호를 전송해 드립니다. <br />
          로그인 후 반드시 비밀번호를 변경해 주세요.
        </p>

        <Button type="submit" variant="secondary" size="lg" disabled>
          임시 비밀번호 전송
        </Button>
      </form>
    </MainComponent>
  );
};
export default FindPassword;
