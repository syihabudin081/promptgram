import "@styles/globals.css";

export const metadata = {
  title: "Promptgram",
  description: "Discover & Share AI Prompts with the world",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>

        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          {children}
        </main>
    </body>
  </html>
);

export default RootLayout;