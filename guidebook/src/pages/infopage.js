// pages/infopage.js
import React from 'react';
import InstantInfoPage from '@/components/Instantinfopage';
import Button from '@/components/Button';

const InfoPage = () => {
  return (
    <div>
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
      <InstantInfoPage
        // title="IMPORTANT NOTICE!!!!"
        description={
          <div>
            <p>
              This comprehensive guide is divided into three sections to help
              you navigate the world of gluten-free living
            </p>
            <ol>
              <li className="pt-5">
                1. Local Vendors and Community Members offering a selection of
                Celiac safe products (Bread, Baking and Pastries, GF Flour,
                Starch, Cacao, Nuts, & more)
              </li>
              <li className="pt-5">
                2. Gluten-Free Grocery Directory; Celiac safe products available
                in the market.
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
                3. البائعون/ات المحليون/ات وأعضاء التجمع الذين يقدمون/ن منتجات
                خالية من الغلوتن وامنة لمرضى السيلياك (خبز، معجنات، طحين، نشاء،
                كاكاو، مكسرات، وأكثر).{' '}
              </li>
            </ol>
          </div>
        }
        isRtl={true}
      />

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

      <div className="flex justify-center p-5">
        <Button />
      </div>
    </div>
  );
};

export default InfoPage;
