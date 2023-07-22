import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

import teacher from '../../../public/teacher.png';
import student from '../../../public/student.png';
import publicIcon from '../../../public/publico.png';
import departamentosIcon from '../../../public/departamento.png';

import {
  Container,
  Topside,
  Logo,
  MenuButton,
  HomeIcon,
  Divisor,
  MenuHeader,
  SubMenuButton,
} from './styles'

export function MenuBar() {
  const router = useRouter()

  return (
    <Container>
      <Topside>
        <Logo>
          <span>Extensão Sigaa - UnB</span>
        </Logo>

        <Link href="/dashboard" passHref style={{ width: '100%' }}>
          <MenuButton className={router.pathname === '/dashboard' ? 'active' : ''}>
            <HomeIcon />
            <span>Dashboard</span>
          </MenuButton>
        </Link>

        <Divisor />

        <MenuHeader>
          <span>Indicadores</span>
        </MenuHeader>

        <Link href="/docentes" passHref style={{ width: '100%' }}>
          <SubMenuButton
            className={router.pathname === '/docentes' ? 'active' : ''}
          >
            <Image
              width={45}
              height={40}
              src={teacher}
              alt="Docentes"
            />
            <span>Docentes</span>
          </SubMenuButton>
        </Link>

        <Link href="/discentes" passHref style={{ width: '100%' }}>
          <SubMenuButton
            className={router.pathname === '/discentes' ? 'active' : ''}
          >
            <Image
              width={45}
              height={40}
              src={student}
              alt="Discentes"
            />
            <span>Discentes</span>
          </SubMenuButton>
        </Link>

        <Link href="/externos" passHref style={{ width: '100%' }}>
          <SubMenuButton
            className={router.pathname === '/externos' ? 'active' : ''}
          >
            <Image
              width={45}
              height={40}
              src={publicIcon}
              alt="Externos"
            />
            <span>Externos</span>
          </SubMenuButton>
        </Link>

        <Divisor />

        <MenuHeader>
          <span>Departamentos</span>
        </MenuHeader>

        <Link href="/departamentos" passHref style={{ width: '100%' }}>
          <SubMenuButton
            className={router.pathname === '/departamentos' ? 'active' : ''}
          >
            <Image
              width={45}
              height={40}
              src={departamentosIcon}
              alt="Métricas gerais"
            />
            <span>Métricas gerais</span>
          </SubMenuButton>
        </Link>

      </Topside>
    </Container>
  )
}
