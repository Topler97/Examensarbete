import { Button } from "../Button";

export default function Contact() {
    return (
      <div className="bg-secondary min-h-screen w-full flex flex-col items-center justify-center p-8">
        <div className="max-w-3xl w-full bg-secondary p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold text-white mb-6 flex flex-col items-center justify-center ">Kontakta oss</h2>
          <form className="space-y-6 w-full flex flex-col items-center">
            <div className="w-1/2">
              <label className="block text-white font-medium">För- och efternamn*</label>
              <input
                type="text"
                className="w-full mt-2 p-1 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ditt namn"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-white font-medium">E-post*</label>
              <input
                type="email"
                className="w-full mt-2 p-1 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="din@email.com"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-white font-medium">Telefonnummer*</label>
              <input
                type="tel"
                className="w-full mt-2 p-1 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ditt telefonnummer"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-white font-medium">Meddelande</label>
              <textarea
                className="w-full mt-2 p-1 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                placeholder="Skriv ditt meddelande här..."
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
