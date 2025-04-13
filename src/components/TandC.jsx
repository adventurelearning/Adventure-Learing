import { useState, useEffect } from 'react';


const TandC = () => {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 " id='TandC'>
      <div>
        <title>Terms and Conditions | Adventure Learning</title>
        <meta name="description" content="Terms and conditions for Adventure Learning website usage" />
      </div>

      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#0057D3] mb-2">Terms and Conditions</h1>
          <p className="text-gray-600">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0057D3] mb-4">Terms and Conditions</h2>
            <p className="mb-4">
            Welcome to Adventure Learning These terms and conditions outline the rules and regulations for the use of Adventure Learning Website, located at https://adventurelearning.in/.
            </p>
            <p className="mb-4">
            By accessing this website we assume you accept these terms and conditions. Do not continue to use Adventure Learning if you do not agree to take all of the terms and conditions stated on this page.
            </p>
            <p className="mb-4">
              The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0057D3] mb-4">Cookies</h2>
            <p className="mb-4">
              We employ the use of cookies. By accessing Adventure Learning, you agreed to use cookies in agreement with the Adventure Learning Privacy Policy.
            </p>
            <p className="mb-4">
              Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0057D3] mb-4">License</h2>
            <p className="mb-4">
              Unless otherwise stated, Adventure Learning and/or its licensors own the intellectual property rights for all material on Adventure Learning. All intellectual property rights are reserved. You may access this from Adventure Learning for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
            <p className="mb-4 font-medium">You must not:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Republish material from Adventure Learning</li>
              <li>Sell, rent or sub-license material from Adventure Learning</li>
              <li>Reproduce, duplicate or copy material from Adventure Learning</li>
              <li>Redistribute content from Adventure Learning</li>
            </ul>
            <p className="mb-4">
              This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Free Terms and Conditions Generator.
            </p>
            <p className="mb-4">
              Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Adventure Learning does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Adventure Learning, its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Adventure Learning shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website. Adventure Learning reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0057D3] mb-4">Children's Information</h2>
            <p className="mb-4">
              Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Adventure Learning  does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0057D3] mb-4">Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page. Our Privacy Policy was created with the help of the Privacy Policy Generator.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0057D3] mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us. Send you emails Find and prevent fraud Log Files Adventure Learning  follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0057D3] mb-4">Hyperlinking to our Content</h2>
            <p className="mb-4">
              The following organizations may link to our Website without prior written approval:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Government agencies;</li>
              <li>Search engines;</li>
              <li>News organizations;</li>
              <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
              <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
            </ul>
            <p className="mb-4">
              These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.
            </p>
            <p className="mb-4">
              We may consider and approve other link requests from the following types of organizations:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>commonly-known consumer and/or business information sources;</li>
              <li>dot.com community sites;</li>
              <li>associations or other groups representing charities;</li>
              <li>online directory distributors;</li>
              <li>internet portals;</li>
              <li>accounting, law and consulting firms; and</li>
              <li>educational institutions and trade associations.</li>
            </ul>
            <p className="mb-4">
              We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Adventure Learning; and (d) the link is in the context of general resource information.
            </p>
            <p className="mb-4">
            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of in. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
            </p>
            <p className="mb-4">
              Approved organizations may hyperlink to our Website as follows:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>By use of our corporate name; or</li>
              <li>By use of the uniform resource locator being linked to; or</li>
              <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.</li>
            </ul>
            <p className="mb-4">
              No use of Adventure Learning logo or other artwork will be allowed for linking absent a trademark license agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0057D3] mb-4">iFrames</h2>
            <p className="mb-4">
              Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0057D3] mb-4">Content Liability</h2>
            <p className="mb-4">
              We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0057D3] mb-4">Reservation of Rights</h2>
            <p className="mb-4">
              We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0057D3] mb-4">Removal of links from our website</h2>
            <p className="mb-4">
              If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
            </p>
            <p className="mb-4">
              We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0057D3] mb-4">Disclaimer</h2>
            <p className="mb-4">
              To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>limit or exclude our or your liability for death or personal injury;</li>
              <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
              <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
              <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
            </ul>
            <p className="mb-4">
              The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TandC;