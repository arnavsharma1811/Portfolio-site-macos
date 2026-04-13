import WindowWrapper from "#hoc/WindowWrapper"
import WindowControls from "./WindowControls"
import { socials } from "#constants"
import { Mail } from "lucide-react"

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact</h2>
      </div>

      <div className="p-8 space-y-6">
        <div className="space-y-2">
          <h3>Let's Connect 🤝</h3>
          <p className="text-sm text-gray-500">
            Feel free to reach out — I'm always open to opportunities, collaborations, or a good tech conversation.
          </p>
        </div>

       <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
          <Mail className="w-5 text-gray-500" />
          <a
            href="mailto:arnavsharma.wrk@gmail.com"
            className="text-sm text-blue-600 hover:underline font-medium"
          >
            arnavsharma.wrk@gmail.com
          </a>
        </div>

        <ul>
          {socials.map(({ id, text, icon, bg, link }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt={text} className="w-6 invert" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, "contact")
export default ContactWindow
