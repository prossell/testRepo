<template lang="pug">
  .judges
    HeaderMenu()
    SubPageTopTitle(:title="'Judges & Mentors'")
    .container
      .judges_message {{message}}
    //- SectionTitle(:title="'Judges'")
    .container
      .judges_wrapper(v-for="(jud,jud_key) in judges" :key="`jud_${jud_key}`")
        a(:href="jud.link").judge
          img.judge_picture(v-if="jud.img" :src="require(`~/assets/images/${jud.img}.png`)")
          .judge_content
            .judge_content--name {{jud.name}}
            .judge_content--affiliate
              .office(v-for="(affi,affi_key) in jud.affiliate" :key="`about_${affi_key}`")
                p {{affi}}
            .judge_content--about(v-for="(about,about_key) in jud.about" :key="`about_${about_key}`")
              p {{about}}
    SectionTitle(:title="'Mentors'")
    .container
      .judges_wrapper(v-for="(men,men_key) in mentors" :key="`men_${men_key}`")
        a(:href="men.link").judge
          img.judge_picture(v-if="men.img" :src="require(`~/assets/images/${men.img}.png`)")
          .judge_content
            .judge_content--name {{men.name}}
            .judge_content--affiliate
              .office(v-for="(affi,affi_key) in men.affiliate" :key="`about_${affi_key}`")
                p {{affi}}
            .judge_content--about(v-for="(about,about_key) in men.about" :key="`about_${about_key}`")
              p {{about}}
    Footer

</template>

<script>
// components
import HeaderMenu from '~/components/molecules/HeaderMenu'
import SubPageTopTitle from '~/components/atoms/SubPageTopTitle'
import SectionTitle from '~/components/atoms/SectionTitle.vue'
import Footer from '~/components/organisms/Footer.vue'

export default {
  components: {
    HeaderMenu,
    SubPageTopTitle,
    SectionTitle,
    Footer
  },

  head() {
    return {
      title: 'Judges',
      titleTemplate: '%s - ONLINE INTERN CONTEST 2020 #3'
    }
  },

  data() {
    return {
      publish: true,
      message: 'オンコン（略称）の審査員およびメンターの方々をご紹介します！',
      // judges: [
      //   {
      //     name: '西村 真陽',
      //     affiliate: ['株式会社ディー・エヌ・エー'],
      //     img: 'nishimura_masaya',
      //     about: [
      //       '同志社大学卒。学生時代はRed Bull Japanでのブランドマーケティングを経験したのち、2016年にDeNA新卒入社。',
      //       '入社後はDeNAライフサイエンスにて『歩いておトク』の企画・運営、レベルデザインの最適化や渉外業務を担当。',
      //       '兼務制度を利用して、健康経営を専門とした部署｢CHO室｣の立ち上げ、社内喫煙室の紙タバコ廃止、オリジナルサラダの企画、マインドフルネスのセミナー講師の他、腰痛撲滅PJを責任者として推進。',
      //       '2018年より、｢笑い×健康｣をテーマとした新規事業の検討チームリーダーを務める。',
      //       '2019年に事業検討終了後、現在は子宮頸がん検診啓発「Blue Star Project」のプロジェクト責任者に従事。',
      //       '子宮頸がん検診の普及に向けたマーケティングやブランディングを行っている。'
      //     ],
      //     link: 'https://twitter.com/masayaquality'
      //   },
      //   {
      //     name: '山根 弘成',
      //     affiliate: [
      //       'ディップ株式会社',
      //       '次世代事業統括部／dip Startups マネージャー',
      //       'BITE｜ガクセラレーター｜聖地巡礼マップ／プロダクトオーナー'
      //     ],
      //     img: 'yamane_hironori',
      //     about: [
      //       '200の出版社で新卒選考を受けるも、インターネットの世界に心惹かれてディップへ入社。大学4年間は夜のお店の店長を任され、店舗運営を経験。',
      //       '営業職2年目で年間表彰を受賞、3年目から新規事業立ち上げ部門へ移動。アニメの聖地を探訪できる「聖地巡礼マップ」を皮切りに、beaconアドネットワーク「Social_Ad」、学生限定チーム副業プラットフォーム「ガクセイハンター」の立ち上げとサービス運営を経験。',
      //       '直近はサラリーマン人生を賭けて、やりたい業務だけかじって稼ぐミニバイトサービス「BITE - バイト -」の立ち上げ責任者、学生限定のアクセラレータプログラム「ガクセラレーター」の校長として年間100名以上の学生メンタリングを行う。',
      //       'また、本業の傍らでスタートアップコンサル、5000名規模のAIRPA系イベントディレクター、AI特化アイドル「AIドル」プロデューサー、デザイン会社UIUXディレクター、官公庁系プロジェクト参画等、個人事業主としてもお仕事中。'
      //     ]
      //   },
      //   {
      //     name: '齊藤 義明',
      //     affiliate: ['野村総合研究所 2030年研究室 室長'],
      //     img: 'saito_yoshiaki',
      //     about: [
      //       '北海道大学卒。1988年野村総合研究所入社、ワシントン支店長、コンサルティング本部戦略企画部長などを歴任、現在はイノベーション・プログラムの開発者として全国を飛び回る。',
      //       '100人以上の革新者と親密なネットワークを持つ。',
      //       '近著に「日本の革新者たち」（ＢＮＮ新社）がある。'
      //     ],
      //     link: 'https://www.nri.com/jp/service/souhatsu'
      //   }
      // ],
      mentors: [
        {
          name: '菅野 流飛',
          affiliate: ['株式会社 高専キャリア教育研究所 代表取締役'],
          img: 'kanno_ryuhi',
          about: [
            '東京高専卒業。東京工業大学大学院博士課程3年次中退。',
            'Speee入社後、リブセンス事業部長、リクルート事業開発など、 IT業界でベンチャー企業から大手企業まで渡り歩いてきた。',
            '2015年よりライフワークとして東京高専でのキャリア教育セミナーや高専特化型クラウドファンディングなどを運営。2017年に高専キャリア教育研究所を設立。',
            '2019年にみらい創造機構と資本業務提携を締結し、エンジニア向けキャリア開発プラットフォームの構築を推進している。',
            '情報経営イノベーション専門職大学客員教授。高専DCON実行委員会。東京高専同窓会役員。'
          ],
          link: 'https://twitter.com/RyuhiKanno'
        },
        {
          name: '兼城 駿一郎',
          affiliate: ['株式会社 高専キャリア教育研究所 CTO'],
          img: 'kaneshiro_shunichiro',
          about: [
            '沖縄高専専攻科卒業。在学中に全国高専プログラミングコンテストと起業家甲子園で準優勝し、学生起業も経験。',
            'リクルートホールディングスに新卒入社後、開発組織の立ち上げ・新規事業開発・スタートアップの買収を経験。',
            'リクルート在籍中にSNS分析のスタートアップmisosilを創業し、代表取締役に就任。VCや金融機関からの資金調達や黒字化を実現し役員を退任。',
            '現在は高専キャリア教育研究所のCTOを務めつつ、Jidoca Technologiesの代表取締役としてスタートアップの技術顧問や事業開発・アプリケーション開発の支援を行っている。'
          ],
          link: 'https://twitter.com/pinkroot'
        }
        // },
        // {
        //   name: '中川 卓也',
        //   affiliate: ['株式会社 アカデミックギャングスター', '代表取締役'],
        //   img: 'nakagawa_takuya',
        //   about: [
        //     '1983年京都大学卒業。',
        //     '事業会社を経て、外資系投資銀行に勤務。',
        //     '・キダー・ピーボディ証券（GEキャピタル）外国株式部',
        //     '・バークレイズ証券 キャピタルマーケット部 ダイレクター',
        //     '・HSBC証券 資本市場部門 マネージング・ダイレクター',
        //     '・みずほ証券 グローバル投資銀行部門 事業開発総括部長',
        //     '・ネスレ日本株式会社 総務人事本部 人材・組織開発部長',
        //     '・プルータス・コンサルティング エグゼクティブ・ダイレクター',
        //     '等を歴任。',
        //     'グローバルマーケッツ、Ｍ＆Ａ、デット/エクイティファイナンス、デリバティブ金融複合商品、ストラクチャードファイナンス・セキュリタイゼーション、ＰＥ・ヘッジファンドの資金調達、ＩＲ・コーポレートガバナンスアドバイス、組織・人材開発プログラム企画実施、などに従事。',
        //     '事業会社、機関投資家の事業戦略、資本・財務政策、資金調達、議決権行使基準、人事人材政策へのアドバイスにより顧客の企業価値向上に携わる。中央官庁、自治体、アカデミア、取引所、などと連携しながら各種制度改正や地方経済活性化にも携わる。'
        //   ],
        //   link: 'https://twitter.com/AcademicGang'
        // }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.judges_message {
  margin: 24px 0 48px;
  width: 100%;
  text-align: center;
  font-size: 2rem;
}

.judges_wrapper {
  text-align: center;
  padding: 48px 0 60px;
}

.judge {
  @include flex($justifyContent: flex-start, $alignItems: flex-start);
  background: $white;
  transition: 0.3s $ease-out-1;
  transform: translateY(0);
  padding: 32px;
  text-decoration: none;
  &::before {
    content: '';
    display: block;
    background: $white;
  }
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 4px 16px rgba($black, 0.1);
  }
  &_picture {
    flex-shrink: 0;
    width: 320px;
    height: 320px;
  }
  &_content {
    margin: 0 0 0 40px;
    text-align: left;
    color: $black;
    &--name {
      font-family: $noto-sans;
      font-size: 2.4rem;
      margin-bottom: 20px;
    }
    &--affiliate {
      font-family: $noto-sans;
      font-size: 2rem;
      margin-bottom: 24px;
    }
    &--about {
      font-family: $noto-sans;
    }
  }
}

@media screen and (max-width: $md) {
  .judges_message {
    font-size: 1.8rem;
    text-align: left;
  }
}

@media screen and (max-width: $tb) {
  .judge {
    &_picture {
      width: 240px;
      height: 240px;
    }
    &_content {
      &--name {
        font-size: 2rem;
      }
      &--affiliate {
        font-size: 1.8rem;
      }
      &--about {
        font-size: 1.4rem;
      }
    }
  }
}

@media screen and (max-width: 780px) {
  .judge {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    &_picture {
      width: 360px;
      height: 360px;
      margin-bottom: 24px;
    }
    &_content {
      text-align: center;
      margin: 0 40px;

      &--about {
        text-align: left;
      }
    }
  }
}
@media screen and (max-width: $sm) {
  .judge {
    &_picture {
      width: 240px;
      height: 240px;
      margin-bottom: 24px;
    }
    &_content {
      &--affiliate {
        font-size: 1.6rem;
      }
    }
  }
}

@media screen and (max-width: 540px) {
  .judge {
    padding: 24px;
    &_content {
      margin: 0;
    }
  }
}
</style>
