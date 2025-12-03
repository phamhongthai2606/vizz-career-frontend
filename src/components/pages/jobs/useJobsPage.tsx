import { useState } from "react";

export const useJobsPage = () => {
  // handle like job
  const [likedIds, setLikedIds] = useState<(number | string)[]>([]);
  const toggleLike = (id: number | string) => {
    setLikedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((i) => i !== id);
      }
      return [...prev, id];
    });
  };

  const description = `■リフォーム事業 ～創業37年の歴史で築いた地域からの信頼～
創業から37年で築きあげた既存のお客様へのリフォーム提案やご紹介や新規のお客様へのリフォーム提案を行っております。
主にリフォーム事業で扱っている商材を導入いただいたお客様からの定期的に追加発注をいただくケースが多いです。

長期インターン生が開拓したお客様宅の住宅リフォーム工事等が完工した場合、インセンティブとして【工事一件あたり10万～20万】が生まれます！
完工した数か月後に、新たな工事の依頼がお客様から頂ければ、その際のインセンティブも受け取ることができます。

お客様から大きな信頼を得ることができれば、１件で10万のインセンティブから追加が続き、合計90万以上まで伸ばしたインターン生もいます。
（2025年度インターン生の実績です）

▶具体的な提案内容こちら
・太陽光発電システム提案
・屋根や外壁などの塗装提案
・トイレやお風呂、キッチンなどの交換提案
・一般家庭や店舗などの増改築提案

社風・風土
・高校時代運動部出身者が多く、明るくフレンドリーな社風です！
・四半期に一回開催される歩合UPキャンペーンがあり、全社員競い合い、高めあうことができます！
・飲み会やフットサル、海外旅行イベントなども定期的に開催です！
・実際にインターン生と関わるのは22歳～29歳までの社員が多いです！
・弊社社員の他に他企業、他業種で働かれている方も、副業として働いている方がいます！※全体の3割
・平日は金融、コンサル、メーカー、医療、ITなどの他企業で働いており、土日は副業として営業活動をしている方が在籍しています！
`;

  const careerGrowthEnvironment = `【募集背景】
★新規事業立ち上げに伴い、*5名限定*で募集いたします！！！★

①時給1200円＋インセンティブ
②完全歩合制 契約数に応じた高額インセンティブ

※少数限定募集であるため、採用後は先輩社員が一人ひとり稼げる
まで徹底的にサポートいたしますのでご安心ください。
※他社の長期インターン経験者とは違い、『本物の営業力』『実践
的な就活力』を身に着けることが可能です。
※最短で必ず結果に繋げるため、基本的に土日祝日のみ出社できる
方でお願いいたします。（応相談可能）

私たちは、地域の住宅メンテナンスの専門家として、
リフォーム事業をはじめとした以下4つの事業を展開しています。

・エネルギー事業
・リフォーム事業
・不動産事業
・住宅設備メンテナンス事業`;

  const skillsYouWillGain = `就活で語れるエピソード 数字に裏打ちされたガクチカが得られます！
就活で語れる会話力 相手に伝わるコミュニケーション力が付きます！
社会人基礎力 目標から逆算して行動する計画性が身に付きます！`;

  const selectionProcess = `①書類選考
↓
②面接実施
↓
③内定通知
↓
④研修日程、初出社日程の決定`;

  // Dummy jobs data
  const jobsList = [
    {
      id: 1,
      title:
        "【圧倒的な営業力を身に着ける】事業拡大による限定募集！社会人に負けない営業力を！ #1,2年生歓迎 #土日出勤 #圧倒的成長 #埼玉県 #東京都",
      titleFull:
        "【圧倒的な営業力を身に着ける】事業拡大による限定募集！社会人に負けない営業力を！ #1,2年生歓迎 #土日出勤 #圧倒的成長 #埼玉県 #東京都 - 株式会社コンフィの長期・有給求人",
      jobType:
        "経営企画、コンサルティング、マーケティング、SNS運用、営業、人事、プロダクトマネージャー",
      jobTypeMain: "エンジニア",
      jobTypeMainCode: "engineering",
      preferredGradeYear:
        "学部1年、学部2年、学部3年、学部4年、修士1年、修士2年",
      workdays: "週1日〜、応相談",
      location: "東京都",
      locationEn: "tokyo",
      nearestStations: "五反田駅 徒歩3分, 大崎駅 徒歩8分",
      salary:
        "月給10万〜50万円（毎月の評価に応じて決定します。） （交通費：全額支給）",
      commitment: "full-time",
      schedulePublicationPeriod: "2025/7/28（月）～2025/10/26（日）",
      updatedAt: "2025/7/28（月）",
      tag: "プロントエンドエンジニア／未経験歓迎／全額支給／週１から／東京都",
      description: description,
      careerGrowthEnvironment: careerGrowthEnvironment,
      skillsYouWillGain: skillsYouWillGain,
      jobTypeFull:
        "経営企画、コンサルティング、マーケティング、SNS運用、営業、人事、プロダクトマネージャー",
      salaryFull: "時給＋インセンティブ or 成果報酬制",
      transportationExpensesProvided: "全額支給",
      otherAllowances: "なし",
      requiredQualifications: "テキスト",
      preferredQualifications: "テキスト",
      employmentType: "長期インターン（3ヶ月以上）",
      workDaysFull: "月〜金",
      workHours: "9:00~18:00 （8時間、１時間休憩）",
      workLocation: "五反田駅 徒歩3分 大崎駅 徒歩8分",
      remoteWorkAvailable: "一部リモート可",
      selectionProcess: selectionProcess,
    },
    {
      id: 2,
      title:
        "【圧倒的な営業力を身に着ける】事業拡大による限定募集！社会人に負けない営業力を！ #1,2年生歓迎 #土日出勤 #圧倒的成長 #埼玉県 #東京都",
      titleFull:
        "【圧倒的な営業力を身に着ける】事業拡大による限定募集！社会人に負けない営業力を！ #1,2年生歓迎 #土日出勤 #圧倒的成長 #埼玉県 #東京都 - 株式会社コンフィの長期・有給求人",
      jobType:
        "経営企画、コンサルティング、マーケティング、SNS運用、営業、人事、プロダクトマネージャー",
      jobTypeMain: "マーケティング",
      jobTypeMainCode: "marketing",
      preferredGradeYear:
        "学部1年、学部2年、学部3年、学部4年、修士1年、修士2年",
      workdays: "週1日〜、応相談",
      location: "東京都",
      locationEn: "tokyo",
      nearestStations: "五反田駅 徒歩3分, 大崎駅 徒歩8分",
      salary:
        "月給10万〜50万円（毎月の評価に応じて決定します。） （交通費：全額支給）",
      commitment: "full-time",
      schedulePublicationPeriod: "2025/7/28（月）～2025/10/26（日）",
      updatedAt: "2025/7/28（月）",
      tag: "プロントエンドエンジニア／未経験歓迎／全額支給／週１から／東京都",
      description: description,
      careerGrowthEnvironment: careerGrowthEnvironment,
      skillsYouWillGain: skillsYouWillGain,
      jobTypeFull:
        "経営企画、コンサルティング、マーケティング、SNS運用、営業、人事、プロダクトマネージャー",
      salaryFull: "時給＋インセンティブ or 成果報酬制",
      transportationExpensesProvided: "全額支給",
      otherAllowances: "なし",
      requiredQualifications: "テキスト",
      preferredQualifications: "テキスト",
      employmentType: "長期インターン（3ヶ月以上）",
      workDaysFull: "月〜金",
      workHours: "9:00~18:00 （8時間、１時間休憩）",
      workLocation: "五反田駅 徒歩3分 大崎駅 徒歩8分",
      remoteWorkAvailable: "一部リモート可",
      selectionProcess: selectionProcess,
    },
    {
      id: 3,
      title:
        "【圧倒的な営業力を身に着ける】事業拡大による限定募集！社会人に負けない営業力を！ #1,2年生歓迎 #土日出勤 #圧倒的成長 #埼玉県 #東京都",
      titleFull:
        "【圧倒的な営業力を身に着ける】事業拡大による限定募集！社会人に負けない営業力を！ #1,2年生歓迎 #土日出勤 #圧倒的成長 #埼玉県 #東京都 - 株式会社コンフィの長期・有給求人",
      jobType:
        "経営企画、コンサルティング、マーケティング、SNS運用、営業、人事、プロダクトマネージャー",
      jobTypeMain: "デザイン",
      jobTypeMainCode: "design",
      preferredGradeYear:
        "学部1年、学部2年、学部3年、学部4年、修士1年、修士2年",
      workdays: "週1日〜、応相談",
      location: "",
      locationEn: "",
      nearestStations: "五反田駅 徒歩3分, 大崎駅 徒歩8分",
      salary:
        "月給10万〜50万円（毎月の評価に応じて決定します。） （交通費：全額支給）",
      commitment: "part-time",
      schedulePublicationPeriod: "2025/7/28（月）～2025/10/26（日）",
      updatedAt: "2025/7/28（月）",
      tag: "プロントエンドエンジニア／未経験歓迎／全額支給／週１から／東京都",
      description: description,
      careerGrowthEnvironment: careerGrowthEnvironment,
      skillsYouWillGain: skillsYouWillGain,
      jobTypeFull:
        "経営企画、コンサルティング、マーケティング、SNS運用、営業、人事、プロダクトマネージャー",
      salaryFull: "時給＋インセンティブ or 成果報酬制",
      transportationExpensesProvided: "全額支給",
      otherAllowances: "なし",
      requiredQualifications: "テキスト",
      preferredQualifications: "テキスト",
      employmentType: "長期インターン（3ヶ月以上）",
      workDaysFull: "月〜金",
      workHours: "9:00~18:00 （8時間、１時間休憩）",
      workLocation: "五反田駅 徒歩3分 大崎駅 徒歩8分",
      remoteWorkAvailable: "一部リモート可",
      selectionProcess: selectionProcess,
    },
    {
      id: 4,
      titleFull:
        "【圧倒的な営業力を身に着ける】事業拡大による限定募集！社会人に負けない営業力を！ #1,2年生歓迎 #土日出勤 #圧倒的成長 #埼玉県 #東京都 - 株式会社コンフィの長期・有給求人",
      title:
        "【圧倒的な営業力を身に着ける】事業拡大による限定募集！社会人に負けない営業力を！ #1,2年生歓迎 #土日出勤 #圧倒的成長 #埼玉県 #東京都",
      jobType:
        "経営企画、コンサルティング、マーケティング、SNS運用、営業、人事、プロダクトマネージャー",
      jobTypeMain: "マーケティング",
      jobTypeMainCode: "marketing",
      preferredGradeYear:
        "学部1年、学部2年、学部3年、学部4年、修士1年、修士2年",
      workdays: "週1日〜、応相談",
      location: "大阪府",
      locationEn: "osaka",
      nearestStations: "五反田駅 徒歩3分, 大崎駅 徒歩8分",
      salary:
        "月給10万〜50万円（毎月の評価に応じて決定します。） （交通費：全額支給）",
      commitment: "contract",
      schedulePublicationPeriod: "2025/7/28（月）～2025/10/26（日）",
      updatedAt: "2025/7/28（月）",
      tag: "プロントエンドエンジニア／未経験歓迎／全額支給／週１から／東京都",
      description: description,
      careerGrowthEnvironment: careerGrowthEnvironment,
      skillsYouWillGain: skillsYouWillGain,
      jobTypeFull:
        "経営企画、コンサルティング、マーケティング、SNS運用、営業、人事、プロダクトマネージャー",
      salaryFull: "時給＋インセンティブ or 成果報酬制",
      transportationExpensesProvided: "全額支給",
      otherAllowances: "なし",
      requiredQualifications: "テキスト",
      preferredQualifications: "テキスト",
      employmentType: "長期インターン（3ヶ月以上）",
      workDaysFull: "月〜金",
      workHours: "9:00~18:00 （8時間、１時間休憩）",
      workLocation: "五反田駅 徒歩3分 大崎駅 徒歩8分",
      remoteWorkAvailable: "一部リモート可",
      selectionProcess: selectionProcess,
    },
  ];
  return {
    // handle like job
    likedIds,
    toggleLike,
    jobsList,
  };
};
