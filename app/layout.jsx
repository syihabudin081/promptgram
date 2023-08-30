import "@styles/globals.css";
import "@components/Nav";
import "@components/Provider";
import Nav from "@components/Nav";
import Provider from "@components/Provider";


export const metadata = {
  title: "Promptgram",
  description: "Discover & Share AI Prompts with the world",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
    <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
        <Nav/>
          {children}
        </main>
        </Provider>
    </body>
  </html>
);

export default RootLayout;