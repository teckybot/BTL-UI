import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import FAQSection from "../components/Faq";

// Import your PNG icons
import youtubeIcon from "../data/Social_Media/youtube.png";
import whatsappIcon from "../data/Social_Media/whatsapp.png";
import instagramIcon from "../data/Social_Media/instagram.png";

export default function ContactUs() {
  return (
    <>
      <Helmet>
        <title>Contact Us – Bharat Teck League Support & Queries</title>
        <meta
          name="description"
          content="Have questions about Bharat Teck League 2024? Contact our team for support, partnership, or registration help. We're here to assist you!"
        />
      </Helmet>

      <div className="w-full min-h-screen bg-white flex flex-col items-center py-16 px-4">
        {/* CONTACT CARD */}
        <div
          className="w-full max-w-5xl rounded-[20px] p-8 mb-10 text-center mt-11"
          style={{
            boxShadow: "0px 0px 40px 2px #00000033",
            background: "#F5F8FF",
          }}
        >
          <h1 className="text-3xl md:text-[40px] font-bold text-[#1A2B6D] mb-10" 
          >
            CONTACT US
          </h1>

          <div className="flex flex-col md:flex-row justify-center md:gap-96 gap-16">
            {/* Coordinator 1 */}
            <div >
              <p className="text-sm mb-2 text-gray-800">Coordinator</p>
              <h3 className="text-xl font-bold text-[#1A2B6D] mb-3">
                M. SRIPOUSHYA
              </h3>
              <a href="tel:+918886122889">
                <div className="px-4 py-2 text-white rounded-md font-semibold text-xl"
                style={{
          background: "linear-gradient(270deg, #2054CC 0%, #0E265F 100%)",
        }}>
                  +91 88861 22889 
                </div>
              </a>  
            </div>

            {/* Coordinator 2 */}
            <div >
              <p className="text-sm mb-2 text-gray-800">Coordinator</p>
              <h3 className="text-xl font-bold text-[#1A2B6D] mb-3">
                CH. JOSHINI
              </h3>
              <a href="tel:+919000555885">
                <div className="px-4 py-2 text-white rounded-md font-semibold text-xl"
                style={{
          background: "linear-gradient(270deg, #2054CC 0%, #0E265F 100%)",
        }}>
                  +91 90005 55885
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* SOCIAL MEDIA CARD */}
        <div
          className="w-full max-w-5xl rounded-[20px] p-10 flex flex-col md:flex-row justify-around items-center gap-16"
          style={{
            boxShadow: "0px 0px 40px 2px #00000033",
            background: "#F5F8FF",
          }}
        >
          {/* YouTube */}
          <div className="flex flex-col items-center gap-4">
            <img src={youtubeIcon} alt="YouTube" className="w-156 h-20 -mb-2" />
            <a
              href="https://youtube.com/@teckybot23?si=KhN2sc0z8OQOpU9q"
              className="px-5 py-2 rounded-md font-semibold text-white"
              style={{ background: "red" }}
            >
              Subscribe
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center gap-4">
            <img src={whatsappIcon} alt="WhatsApp" className="w-14 h-14" />
            <a
              href="https://chat.whatsapp.com/Jb2LYbDdbhm3CgyL2TRjJG"
              className="px-5 py-2 rounded-md font-semibold text-white"
              style={{ background: "green" }}
            >
              Join Group
            </a>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center gap-4">
            <img src={instagramIcon} alt="Instagram" className="w-14 h-14" />
            <a
              href="https://www.instagram.com/teckybot?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="px-5 py-2 rounded-md font-semibold text-white"
              style={{
                background:
                  "linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)",
              }}
            >
              Follow Page
            </a>
          </div>
        </div>
      </div>

      {/* FAQ + Footer */}
      <FAQSection />
      <Footer />
    </>
  );
}
