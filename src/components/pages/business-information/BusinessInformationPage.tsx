"use client";

import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export default function BusinessInformationPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#f9fafb]">
      <Breadcrumb
        items={[{ label: "TOP", href: "/" }, { label: "会社管理" }]}
        itemClassName="tracking-[0.1em]"
      />

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-10">
        <h1 className="h-[36px] w-[99px] text-2xl font-bold">会社管理</h1>
        <button className="border-red-primary flex h-[40px] w-[160px] items-center justify-center gap-2 rounded-full border bg-white px-6 py-2">
          <Image
            src="/business/edit2.png"
            alt="Edit2 Icon"
            width={16}
            height={16}
            className="flex aspect-square h-4 w-4 items-center justify-center"
          />
          <span className="text-red-primary text-sm font-normal tracking-[0.14em]">
            編集する
          </span>
        </button>
      </div>

      <div className="mx-auto mb-[72px] flex w-full max-w-[1140px] flex-col items-start gap-10 px-4">
        <div className="flex w-full flex-col gap-6 rounded-t border border-[#B9B9B9] bg-white p-10">
          <div className="flex flex-col items-center gap-2">
            <div className="text-sm font-bold tracking-[0.04em] text-black">
              会社ロゴ
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="h-[120px] w-[120px] overflow-hidden rounded bg-white">
                <Image
                  src="/business/logo.png"
                  alt="Default Logo"
                  width={120}
                  height={120}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex items-center gap-4">
                <label
                  htmlFor="logo-upload"
                  className="flex cursor-pointer items-center gap-2"
                >
                  <Image
                    src="/business/upload.png"
                    alt="Upload Icon"
                    width={16}
                    height={16}
                    className="flex aspect-square h-4 w-4 items-center justify-center"
                  />
                  <span className="text-blue-primary text-sm font-normal tracking-[0.56px]">
                    logo.jpg
                  </span>
                </label>
                <div className="text-xs tracking-[0.1em] text-[#5C5C5C]">
                  画像サイズは800*800です。jpg、png
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="h-[21px] w-[197px] text-sm font-bold tracking-[0.04em] text-black">
              会社名
            </div>
            <div className="ml-32 h-[21px] w-[160px] text-sm font-normal tracking-[0.04em] text-black">
              株式会社ABCD
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex gap-6">
              <div className="w-32 text-sm font-bold tracking-[0.04em] text-black">
                カバー画像
              </div>
              <div className="ml-50 flex flex-1 flex-col gap-3">
                <div className="flex h-[100px] w-[579px] items-center justify-center overflow-hidden rounded border border-[#111958]">
                  <Image
                    src="/business/cover-image.png"
                    alt="Cover Image"
                    width={579}
                    height={100}
                    className="flex items-center justify-center"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <label
                    htmlFor="logo-upload"
                    className="flex cursor-pointer items-center gap-2"
                  >
                    <Image
                      src="/business/upload.png"
                      alt="Upload Icon"
                      width={16}
                      height={16}
                      className="flex aspect-square h-4 w-4 items-center justify-center"
                    />
                    <span className="text-blue-primary text-sm font-normal tracking-[0.04em]">
                      logo.jpg
                    </span>
                  </label>
                  <div className="text-xs tracking-[0.1em] text-[#5C5C5C]">
                    画像サイズは800*800です。jpg、png
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-[#B9B9B9]"></div>

          <div className="flex items-center gap-6">
            <div className="h-[21px] w-[197px] text-sm font-bold tracking-[0.04em] text-black">
              業界
            </div>
            <div className="ml-32 h-[21px] w-[160px] text-sm font-normal tracking-[0.04em] text-black">
              IT・Wed
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="h-[21px] w-[197px] text-sm font-bold tracking-[0.04em] text-black">
              企業規模
            </div>
            <div className="ml-32 h-[21px] w-[178px] text-sm font-normal tracking-[0.04em] text-black">
              中規模企（101-1000名）
            </div>
          </div>

          <div className="h-px w-full bg-[#B9B9B9]"></div>

          <div className="flex flex-col gap-6">
            <div className="flex gap-6">
              <div className="h-[21px] w-[197px] text-sm font-bold tracking-[0.04em] text-black">
                企業の魅力・特徴
              </div>
              <div className="ml-32 h-[210px] w-[579px] text-sm font-normal tracking-[0.04em] text-black">
                ミッションは「今日よりも、明日。大きな社会課題を解決する。」です。
                <br />
                <br />
                私たちはあえて特定のビジネス領域へのビジョンを持たずに活動をしています。
                <br />
                移り変わりの激しい現在、少なくとも私たちには将来起こる社会課題が何か、を予想す
                ることは非常に困難です。
                <br />
                どうすればより確実に「明日大きな社会課題を解決できる」かを考えると、それは時に足枷になってしまうと思うのです。
                <br />
                大きな課題を解決しようとすると、強い会社でなくては実現できないことが多いです。
                <br />
                私たちの強い会社の定義は、「広く、深く信頼を勝ち取っている」こと。そのため、目
                の前の信頼を勝ち取ることに全力を尽くしています。
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="h-[42px] w-[197px] text-sm font-bold tracking-[0.04em] text-black">
              インターン卒業生の
              <br />
              主な就職先
            </div>
            <div className="ml-32 h-[21px] w-[579px] text-sm font-normal tracking-[0.04em] text-black">
              企業データベースから企業検索できるようにすると尚良
            </div>
          </div>

          <div className="flex gap-6">
            <div className="h-[21px] w-[197px] text-sm font-bold tracking-[0.04em] text-black">
              代表メッセージ
            </div>
            <div className="ml-32 h-[294px] w-[579px] text-sm font-normal tracking-[0.04em] text-black">
              現在、株式会社Webyは次世代のWebマーケターや営業を育成する"WISE"というイン
              <br />
              ターンシッププログラムも実施しています。WISEは、単なる「学習の場」
              ではなく、
              Webyの事業や媒体と顧客・社会との間にあるギャップを埋める「架け橋」としての役割
              を担っています。
              <br />
              <br />
              2025年から本格始動した「WISEプログラム」では、現在約20名以上のインターン生が
              在籍し、自ら目標を立てPDCAを回し、日々スキルを磨いています。ただ与えられた仕
              事をこなすだけでなく、自分で課題を見つけ、解決する力を育てることを重視します。
              この経験を通じて、インターン生一人ひとりが組織内で存在感を示し、積極的に活躍し
              ています。
              <br />
              <br />
              WISEの最終的な目標は、インターン生が主体となって新しいイノベーションを生み出
              し、そのサービスを通じて会社内で新たな組織を築き上げることです。その実現に向け
              て、優秀な仲間と共に、組織と自分の可能性を広げていける環境がここにはあります。
            </div>
          </div>

          <div className="h-px w-full bg-[#B9B9B9]"></div>

          <div className="flex gap-6">
            <div className="h-[21px] w-[197px] text-sm font-bold tracking-[0.04em] text-black">
              ホームページURL
            </div>
            <Link
              href="https://www.kaisya.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-32 h-[21px] w-[579px] flex-1 text-sm font-normal tracking-[0.04em] text-[#2353FF] underline"
            >
              https://www.kaisya.jp
            </Link>
          </div>

          <div className="flex gap-6">
            <div className="h-[21px] w-[197px] text-sm font-bold tracking-[0.04em] text-black">
              会社住所
            </div>
            <div className="ml-32 h-[21px] w-[319px] text-sm font-normal tracking-[0.04em] text-black">
              東京都中央区銀座2-16-7銀座2丁目松竹ビル 2F
            </div>
          </div>

          <div className="flex gap-6">
            <div className="h-[21px] w-[197px] text-sm font-bold tracking-[0.04em] text-black">
              社員数
            </div>
            <div className="ml-32 h-[21px] w-[160px] text-sm font-normal tracking-[0.04em] text-black">
              1,231 人
            </div>
          </div>

          <div className="flex gap-6">
            <div className="h-[21px] w-[197px] text-sm font-bold tracking-[0.04em] text-black">
              設立年
            </div>
            <div className="ml-32 h-[21px] w-[160px] text-sm font-normal tracking-[0.04em] text-black">
              1991 年
            </div>
          </div>

          <div className="flex gap-6">
            <div className="h-[21px] w-[197px] text-sm font-bold tracking-[0.04em] text-black">
              資本金
            </div>
            <div className="ml-32 h-[21px] w-[160px] text-sm font-normal tracking-[0.04em] text-black">
              5,000万 円
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
