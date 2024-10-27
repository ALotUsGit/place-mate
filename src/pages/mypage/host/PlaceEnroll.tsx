import Button from "../../../components/ui/Button";

const PlaceEnroll = () => {
  return (
    <>
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-4xl/none font-semibold">
          장소 등록<span className="font-normal">/</span>관리
        </h2>
        <Button size="md">임시저장 (0)</Button>
      </div>
    </>
  );
};
export default PlaceEnroll;
