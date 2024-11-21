import { Link } from "react-router-dom";
import MainComponent from "../../components/MainComponent";
import Button from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

const SignIn = () => {
  return (
    <MainComponent className="flex max-w-[30rem] flex-col px-0 items-center justify-center gap-9">
      <form action="" className="flex w-full flex-col gap-4">
        <Input placeholder="이메일을 입력하세요." />
        <Input type="password" placeholder="비밀번호를 입력하세요." />
        <Button variant="secondary" size="lg" disabled>
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
    </MainComponent>
  );
};
export default SignIn;
