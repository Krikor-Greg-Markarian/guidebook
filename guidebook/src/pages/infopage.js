// pages/infopage.js
import React from 'react';
import InstantInfoPage from '@/components/Instantinfopage';
import Button from '@/components/Button';
import DescandQr from '@/components/DescandQr';
import Gfshopscard from '@/components/Gfshopscard';

const InfoPage = () => {
  const cardData = [
    {
      // title: 'Card 1 Title',
      description:
        'Before we start, we invite you to stay inspired and well- informed by connecting to the Instagram Account: @Happy_Healthy_Gluten_Free_Life. Here, you will uncover a wealth of knowledge on gut-healthy living and dedicated celiac support. Expect to find expert tips, delicious recipes, and invaluable insights covering autoimmune conditions, gut health, and effective celiac management.',
      images: ['/backgrounds/Nisrine.jpeg', '/backgrounds/Nisrine2.jpeg'],
    },

    {
      // title: 'Card 1 Title',
      description:
        'If you have kid(s) with Celiac, we want to recommend this book for you. (Got Celiac? Me Too) is a warm and engaging childrens book that addresses the challenges and adventures of living with celiac disease. With a combination of playful illustrations and compassionate storytelling, it is designed to help children understand and embrace a gluten-free lifestyle. The book is available at La Librairie Oriental Ashrafieh and at Der Mar Youssef Jrabta',
      images: ['/backgrounds/Lealahoud.jpeg'],
    },

    // Add more data as needed
  ];

  const gfshopscardData1 = {
    name: 'Sea Slim',
    phoneNumber: '76 336665',
    picture: '/backgrounds/Seaslim.jpeg',
    description: [
      'GF bread',
      'All kinds of GF pastries and sweet',
      'All kind of GF flour',
      'All kind of GF starch',
      'All kind of GF gum',
      'Cacao',
      'Vanilla',
      'Baking Powderrrr',
      // Add more points as needed
    ],
  };

  const gfshopscardData2 = {
    name: 'Chocowoo',
    phoneNumber: '70 661170',
    picture: '/backgrounds/Chocowoo.jpeg',
    description: [
      'All kinds of pastries and baking',
      'All kind of GF flour',
      'GF burghul',
      'GF smeed',
      'Kichek',
      'Starch',
      'Zaatar mix',
      'Peanut butter',
      'Dates',
      'Chocolate spread',
      'Chocolate chips',
      'Cacao',
      'Baking powder',
      ' Vanilla',
      'Yeast',

      // Add more points as needed
    ],
  };

  const gfshopscardData3 = {
    name: 'Gluten Free May',
    phoneNumber: '76 058686',
    picture: '/backgrounds/May.jpeg',
    description: [
      'All purpose GF flour',
      'All kinds of baking and pastries',
      'Burghul (coarse and fine)',
      'Kichek',
      ' Zaatar mix',
      'Peanut butter',
      'Sweets',

      // Add more points as needed
    ],
  };

  const gfshopscardData4 = {
    name: 'Gluten Free May',
    phoneNumber: '03 537754',
    picture: '/backgrounds/Paindou.jpeg',
    description: [
      'GF bread',
      'All kind of baking (croissant , sandwich, pain au lait ....)',
      'GF flour',
      // Add more points as needed
    ],
  };

  const gfshopscardData5 = {
    name: 'Rana Bakes',
    phoneNumber: '71 380388',
    picture: '/backgrounds/Rana.jpeg',
    description: [
      'All kinds of pastries',
      'Gf bread',
      'Gf burghul (fine/coarse)',
      'Sweets',
      'Kichek',
      'Zaatar',
      'Sumac',
      'Spices',
      'Mouneh',
      // Add more points as needed
    ],
  };

  return (
    <div>
      <div className="bg-gray-100 rounded-xl shadow-md p-6 mb-4">
        <InstantInfoPage
          title="IMPORTANT NOTICE!!!!"
          description="This document undergoes monthly updates to ensure providing the most recent information. Please make sure you're referencing the most up-to-date version; the publication date is clearly displayed on the initial page.
        We take meticulous care in compiling this file. Our team collaborates with companies to obtain regular test results and certifications and also communicates directly with manufacturers to maintain the accuracy of our list. However, given the complexities of the supply chain, suppliers might make unannounced alterations to their products.
        For your safety and to make informed choices, we strongly advise that you always review product labels closely. While we try to offer Celiac Patients accurate and safe product recommendations, the final responsibility rests with the consumer. Consume products at your own risk."
          isRtl={false}
        />
        <InstantInfoPage
          title="هام جدا"
          description="يخضع هذا المستند لتحديثات شهرية لضمان توفير أحدث المعلومات. يرجى التأكد من أن ما بين أديكم/ن أحدث إصدار؛ يتم عرض تاريخ المستند بوضوح على الصفحة الأولى.
        يولي فريقنا عناية دقيقة في تحضير هذا الملف. يتم التعاون مع الشركات للحصول على نتائج الاختبارات والشهادات المنتظمة ويتواصل الفريق أيضا مباشرة مع الشركات المصنعة للحفاظ على دقة قائمتنا. ومع ذلك، نظرا لتعقيدات سلسلة التوريد، قد يقوم الموردون بإجراء تعديلات على
        منتجاتهم دون اعلامنا.
        من أجل سلامتكم/ن، ننصح بمراجعة ملصق المكونات دائما وعن كثب. بينما نحاول تقديم توصيات دقيقة وآمنة لمرضى السيلياك، تقع المسؤولية النهائية على عاتق المستهلك. استهلك المنتجات على مسؤوليتك الخاصة."
          isRtl={true}
        />
      </div>
      <div className="pt-12">
        <div className="bg-gray-100 rounded-xl shadow-md p-6 mb-4">
          <InstantInfoPage
            // title="IMPORTANT NOTICE!!!!"
            description={
              <div>
                <p>
                  This comprehensive guide is divided into three sections to
                  help you navigate the world of gluten-free living
                </p>
                <ol>
                  <li className="pt-5">
                    1. Local Vendors and Community Members offering a selection
                    of Celiac safe products (Bread, Baking and Pastries, GF
                    Flour, Starch, Cacao, Nuts, & more)
                  </li>
                  <li className="pt-5">
                    2. Gluten-Free Grocery Directory; Celiac safe products
                    available in the market.
                  </li>
                  <li className="pt-5">3. Cosmetics and Skin Care.</li>
                </ol>
              </div>
            }
            isRtl={false}
          />
          <InstantInfoPage
            // title="IMPORTANT NOTICE!!!!"
            description={
              <div>
                <p>يحتوي هذا الدليل الشامل على ثلاثة أقسام:</p>
                <ol>
                  <li className="pt-5">
                    1. دليل المنتجات الخالية من الغلوتين والامنة لمرضى السيلياك
                    الموجودة في الأسواق التجارية والبقالة.)
                  </li>
                  <li className="pt-5">
                    2. مستحضرات التجميل والعناية بالبشرة الخالية من الغلوتن.
                  </li>
                  <li className="pt-5">
                    3. البائعون/ات المحليون/ات وأعضاء التجمع الذين يقدمون/ن
                    منتجات خالية من الغلوتن وامنة لمرضى السيلياك (خبز، معجنات،
                    طحين، نشاء، كاكاو، مكسرات، وأكثر).{' '}
                  </li>
                </ol>
              </div>
            }
            isRtl={true}
          />
        </div>
      </div>
      <div className="pt-12">
        <div className="bg-gray-100 rounded-xl shadow-md p-6 mb-4">
          <InstantInfoPage
            title="Glossary"
            description="This emoji ( 😊 ) signifies that the products bear a “GF label”. Therefore, it is advisable to always verify the label's presence."
            isRtl={false}
          />

          <InstantInfoPage
            description="
      
      
        يشير هذا الرمز التعبيري ( 😊 ) إلى أن المنتجات تحمل علامة GF . لذلك، يُنصح بالتحقق دائمًا من وجود الملصق.
      
      
      
      "
            isRtl={true}
          />

          <InstantInfoPage
            // title="Glossary"
            description="This emoji ( 😡 ) signifies that the products have been verified as safe through company confirmation and laboratory testing, which we regularly acquire through our ongoing communication with these companies."
            isRtl={false}
          />

          <InstantInfoPage
            // title="Glossary"
            description="
        يشير هذا الرمز التعبيري ( 😡 ) إلى أنه تم التحقق من سلامة المنتجات من خلال تأكيد الشركة والاختبارات المعملية، والتي نحصل عليها بانتظام من خلال اتصالاتنا المستمرة مع هذه الشركات.
        "
            isRtl={true}
          />
        </div>
      </div>
      <div>
        {cardData.map((data, index) => (
          <DescandQr key={index} {...data} />
        ))}
      </div>

      <div>
        <Gfshopscard data={gfshopscardData1} />
        <Gfshopscard data={gfshopscardData2} />
        <Gfshopscard data={gfshopscardData3} />
        <Gfshopscard data={gfshopscardData4} />
        <Gfshopscard data={gfshopscardData5} />
        {/* <Gfshopscard data={gfshopscardData6} /> */}
        {/* Add more Gfshopscard components as needed */}
      </div>

      <div className="flex justify-center p-5">
        <Button />
      </div>
    </div>
  );
};

export default InfoPage;
