import Security from '../assets/Security'
import SecurityLarge from '../assets/SecurityLarge'
import UserLarge from '../assets/UserLarge'
import User from '../assets/User'
import Activity from '../assets/Activity'
import RocketLarge from '../assets/RocketLarge'
import RocketIcon from '../assets/RocketIcon'
import Envelope from '../assets/Envelope'
import Calendar from '../assets/Calendar'
import Clock from '../assets/Clock'
import Book from '../assets/Book'
import Heart from '../assets/Heart'
import reactLogo from '../assets/react-logo.jpg'
import postgreLogo from '../assets/postgresql-logo.png'
import prismaLogo from '../assets/prisma-logo.png'
import expressLogo from '../assets/express-logo.png'
import nodeLogo from '../assets/nodejs-logo.jpg'
import jwtLogo from '../assets/jwt-logo.png'

  const data = [
    {
      id:0,
      variant: 'account',
      icon: SecurityLarge,
      title: "Cuenta activa",
      subtitle: "Todo en orden",
      description: "Tu cuenta está activa y verificada correctamente",
      information: "JWT autenticado"
    },
    {
      id:1,
      variant: 'details',
      icon: UserLarge,
      title: "Tu perfil",
      subtitle: "Información personal",
      descriptionItems: [
        {
          id:0,
          name: "Email",
          descriptionData: "mushu@potato.com",
          icon: Envelope
        },
        {
          id:1,
          name: "Miembro desde",
          descriptionData: "15 may. 2026",
          icon: Calendar
        },
        {
          id:2,
          name: "Rol",
          descriptionData: "Usuario",
          icon: Security
        }
      ],
      information: "Ver perfil completo",
      informationIcon: User
    },
    {
      id:2,
      variant: 'details',
      icon: Activity,
      title: "Tu actividad",
      subtitle: "Resumen rápido",
      descriptionItems: [
        {
          id:0,
          name: "Último acceso",
          descriptionData: "Hoy, 10:42 AM",
          icon: Clock
        },
        {
          id:1,
          name: "Libros guardados",
          descriptionData: 0,
          icon: Book
        },
        {
          id:2,
          name: "Favoritos",
          descriptionData: 0,
          icon: Heart
        }
      ],
      information: "Explorar libros",
      informationIcon: RocketIcon
    },
    {
      id:3,
      variant: 'technologies',
      icon: RocketLarge,
      title: "Tecnologias utilizadas",
      subtitle: "Stack completo del proyecto",
      tecnologias: [
        {
          id:0,
          name: "React",
          src: reactLogo,
        },
        {
          id:1,
          name: "Node.js",
          src: nodeLogo,
        },
        {
          id:2,
          name: "Express",
          src: expressLogo,
        },
        {
          id:3,
          name: "PostgreSQL",
          src: postgreLogo,
        },
        {
          id:4,
          name: "Prisma",
          src: prismaLogo,
        },
        {
          id:5,
          name: "JWT",
          src: jwtLogo,
        }
      ]
    }
  ]

  export default data