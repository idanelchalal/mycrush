import Image from "next/image";

const AvatarTitle = ({ session: Session }: any) => {
  if (!Session) return <></>;

  return (
    <>
      <section id={Session?.user?.name + "-avatar-section"}>
        <label className="flex flex-row items-center gap-x-3">
          <div className="relative w-10 h-10">
            <Image
              src={Session?.user?.image!}
              alt="avatar-section-picture"
              className="rounded-full"
              fill
            />
          </div>
          <span className="text-primaryColor">{Session.user?.name}</span>
        </label>
      </section>
    </>
  );
};

export default AvatarTitle;
