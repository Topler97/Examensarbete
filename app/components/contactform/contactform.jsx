import { Button } from "../Button";

export default function ContactForm() {
    return (
      <div className="bg-secondary min-h-screen w-full flex flex-col items-center justify-center p-8">
        <div className="max-w-3xl w-full bg-secondary lg:py-8 rounded-2xl">
          <h2 className="text-2xl font-semibold text-white mb-6 flex flex-col items-center justify-center ">Kontakta oss</h2>
          <form className="space-y-6 w-full flex flex-col items-center">
            <div className="w-full lg:w-2/3">
              <label className="block text-white">För- och efternamn*</label>
              <input
                type="text"
                className="w-full mt-2 p-1 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="w-full lg:w-2/3">
              <label className="block text-white">E-post*</label>
              <input
                type="email"
                className="w-full mt-2 p-1 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="w-full lg:w-2/3">
              <label className="block text-white">Telefonnummer*</label>
              <input
                type="tel"
                className="w-full mt-2 p-1 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="w-full lg:w-2/3">
              <label className="block text-white">Meddelande</label>
              <textarea
                className="w-full mt-2 p-1 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                required
              ></textarea>
            </div>
            <Button 
              buttonText="Skicka"
              buttonColor="#5B3636"
              className="py-2 px-6"
            />
          </form>
        </div>
      </div>
    );
  }
