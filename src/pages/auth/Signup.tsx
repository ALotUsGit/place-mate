import {
  EnvelopeIcon,
  LockClosedIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import MainComponent from "../../components/MainComponent";
import Button from "../../components/ui/Button";
import { Input, InputLabel, InputWrap } from "../../components/ui/Input";
import Checkbox from "../../components/ui/Checkbox";
import useInput from "../../hooks/useInput";
import { email_regex, nickname_regex, pw_regex } from "../../utils/regex";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useCheckbox from "../../hooks/useCheckbox";

const Signup = () => {
  // input 상태
  const [nickname, onChangeNickname] = useInput("");
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [pwDuplicate, onChangePwDuplicate] = useInput("");

  // input error 상태
  const [nickErr, setNickErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [pwDupliteErr, setPwDuplitedErr] = useState(false);

  // 체크박스 상태값
  const [service, onChangeService, , setService] = useCheckbox(false);
  const [personal, onChangePersonal, , setPersonal] = useCheckbox(false);
  const [marketing, onChangeMarketing, , setMarketing] = useCheckbox(false);
  const [allAgree, setAllAgree] = useState(false);

  const navigate = useNavigate();

  // 닉네임 유효성
  const nickCheck = () => {
    const isNicklValid = nickname_regex.test(nickname);
    setNickErr(!isNicklValid);
  };

  // 닉네임 유효성
  const emailCheck = () => {
    const isEmailValid = email_regex.test(email);
    setEmailErr(!isEmailValid);
  };

  // 비밀번호 유효성
  const pwCheck = () => {
    const isPasswordValid = pw_regex.test(password);
    setPasswordErr(!isPasswordValid);
  };

  // 비밀번호 확인 유효성 (다른 요소와 통일성을 위해 ! 추가)
  const pwDuplicateCheck = () => {
    setPwDuplitedErr(!(password === pwDuplicate));
  };

  // 닉네임 중복확인
  const nickDuplicateCheck = () => {};

  // 이메일 중복확인
  const emailDuplicateCheck = () => {};

  // 전체 동의
  const handleChangeAllAgree = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setAllAgree(checked);

    // 모두 동의가 체크되면, 개별 체크박스를 모두 체크
    setService(checked);
    setPersonal(checked);
    setMarketing(checked);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/signin");
  };

  return (
    <MainComponent className="flex max-w-[30rem] items-center px-0">
      <form className="flex w-full flex-col gap-10" onSubmit={onSubmitHandler}>
        <div>
          <div className="mb-4 flex items-center gap-2">
            <UserCircleIcon className="size-6" />
            <p className="text-lg/none font-bold">
              닉네임
              <span className="font-normal text-rose-600">*</span>
            </p>
          </div>
          <InputWrap>
            <Input
              placeholder="닉네임을 입력하세요."
              maxLength={10}
              variant={nickErr ? "error" : "default"}
              value={nickname}
              onChange={onChangeNickname}
              onBlur={nickCheck}
            >
              <Button className="h-auto">중복확인</Button>
            </Input>
            <InputLabel variant={nickErr ? "error" : "default"}>
              영문, 숫자 포함 최소 4자에서 최대 10자까지 가능
            </InputLabel>
          </InputWrap>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <EnvelopeIcon className="size-6" />
            <p className="text-lg/none font-bold">
              이메일
              <span className="font-normal text-rose-600">*</span>
            </p>
          </div>
          <InputWrap>
            <Input
              placeholder="이메일을 입력하세요."
              variant={emailErr ? "error" : "default"}
              value={email}
              onChange={onChangeEmail}
              onBlur={emailCheck}
            >
              <Button className="h-auto">중복확인</Button>
            </Input>
            {emailErr && (
              <InputLabel variant="error">이메일 형식이 아닙니다.</InputLabel>
            )}
          </InputWrap>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <LockClosedIcon className="size-6" />
            <p className="text-lg/none font-bold">
              비밀번호
              <span className="font-normal text-rose-600">*</span>
            </p>
          </div>
          <InputWrap>
            <Input
              type="password"
              placeholder="비밀번호를 입력하세요."
              maxLength={15}
              variant={passwordErr ? "error" : "default"}
              value={password}
              onChange={onChangePassword}
              onBlur={pwCheck}
            />
            <InputLabel variant={passwordErr ? "error" : "default"}>
              영문/숫자/특수문자 포함 8자 이상 15자 이하
            </InputLabel>
          </InputWrap>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2">
            <LockClosedIcon className="size-6" />
            <p className="text-lg/none font-bold">
              비밀번호 확인
              <span className="font-normal text-rose-600">*</span>
            </p>
          </div>
          <InputWrap>
            <Input
              type="password"
              placeholder="비밀번호를 입력하세요."
              variant={pwDupliteErr ? "error" : "default"}
              value={pwDuplicate}
              onChange={onChangePwDuplicate}
              onBlur={pwDuplicateCheck}
            />
            <InputLabel variant={pwDupliteErr ? "error" : "default"}>
              비밀번호를 한번 더 입력하세요.
            </InputLabel>
          </InputWrap>
        </div>

        <div className="flex flex-col gap-2">
          <Checkbox
            checked={service && personal && marketing}
            onChange={handleChangeAllAgree}
            className="font-bold text-gray-800"
          >
            모두 동의합니다.
          </Checkbox>
          <div className="h-2" />
          <Checkbox checked={service} onChange={onChangeService}>
            서비스 이용약관에 동의합니다.&nbsp;
            <span className="text-rose-600">(필수)</span>
          </Checkbox>
          <Checkbox checked={personal} onChange={onChangePersonal}>
            개인정보 수집 및 이용에 동의합니다.&nbsp;
            <span className="text-rose-600">(필수)</span>
          </Checkbox>
          <Checkbox checked={marketing} onChange={onChangeMarketing}>
            마케팅 수신·홍보 목적의 개인정보 수집 및 이용에 동의합니다. (선택)
          </Checkbox>
        </div>

        <Button
          type="submit"
          variant="secondary"
          size="lg"
          disabled={
            !(
              nickname &&
              email &&
              password &&
              !pwDupliteErr &&
              service &&
              personal
            )
          }
        >
          회원가입
        </Button>
      </form>
    </MainComponent>
  );
};

export default Signup;
