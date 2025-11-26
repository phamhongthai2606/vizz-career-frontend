export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-start gap-[15px] bg-[#111958] px-0 py-6 mt-[33px]">
      <div className="flex w-full items-start justify-center gap-9 pr-[90px]">
        <a
          href="/"
          className="text-center text-xs font-normal leading-[120%] text-white"
        >
          ご利用ガイド
        </a>
        <a
          href="/"
          className="text-center text-xs font-normal leading-[120%] text-white"
        >
          よくある質問
        </a>
        <a
          href="/"
          className="text-center text-xs font-normal leading-[120%] text-white"
        >
          プライバシーポリシー
        </a>
        <a
          href="/"
          className="text-center text-xs font-normal leading-[120%] text-white"
        >
          サイトマップ
        </a>
      </div>

      <div className="flex w-full items-start justify-center gap-4 px-[180px] pt-3 pl-[90px]">
        <img
          src="/logo-footer.svg"
          alt="Coco Career"
          className="h-[57px] w-[169px]"
        />
      </div>

      <div className="flex w-full items-center justify-center gap-4 px-[180px] py-3 pl-[90px]">
        <p className="text-right text-xs font-normal leading-[120%] text-white">
          ©coco motion, inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
