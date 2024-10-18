import {
  EnvelopeIcon,
  LockClosedIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import MainComponent from "../../components/MainComponent";
import Button from "../../components/form/Button";
import { Input } from "../../components/form/Input";
import Checkbox from "../../components/form/Checkbox";

const Signup = () => {
  return (
    <MainComponent className="flex max-w-[30rem] items-center">
      <form className="flex w-full flex-col gap-10">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <UserCircleIcon className="size-6" />
            <p className="text-lg/none font-bold">
              닉네임
              <span className="font-normal text-rose-600">*</span>
            </p>
          </div>
          <Input placeholder="닉네임을 입력하세요." msg="" />
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <EnvelopeIcon className="size-6" />
            <p className="text-lg/none font-bold">
              이메일
              <span className="font-normal text-rose-600">*</span>
            </p>
          </div>
          <Input placeholder="이메일을 입력하세요." msg="" />
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <LockClosedIcon className="size-6" />
            <p className="text-lg/none font-bold">
              비밀번호
              <span className="font-normal text-rose-600">*</span>
            </p>
          </div>
          <Input type="password" placeholder="비밀번호를 입력하세요." msg="" />
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <LockClosedIcon className="size-6" />
            <p className="text-lg/none font-bold">
              비밀번호 확인
              <span className="font-normal text-rose-600">*</span>
            </p>
          </div>
          <Input type="password" placeholder="비밀번호를 입력하세요." msg="" />
        </div>

        <div className="flex flex-col gap-2">
          <Checkbox className="font-bold text-gray-800">
            모두 동의합니다.
          </Checkbox>
          <div className="h-2" />
          <Checkbox>
            서비스 이용약관에 동의합니다.&nbsp;
            <span className="text-rose-600">(필수)</span>
          </Checkbox>
          <Checkbox>
            개인정보 수집 및 이용에 동의합니다.&nbsp;
            <span className="text-rose-600">(필수)</span>
          </Checkbox>
          <Checkbox>
            마케팅 수신·홍보 목적의 개인정보 수집 및 이용에 동의합니다. (선택)
          </Checkbox>
        </div>

        <Button type="submit" variant="secondary" size="lg" disabled>
          회원가입
        </Button>
      </form>
    </MainComponent>
  );
};
export default Signup;
