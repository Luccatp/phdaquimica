import curso from '../styles/curso/curso.module.scss'
import firstView from '../styles/curso/firstView.module.scss'
import secondView from '../styles/curso/secondView.module.scss'
import thirdView from '../styles/curso/thirdView.module.scss'
import fourthView from '../styles/curso/fourthView.module.scss'

import Image from 'next/image'
import Link from 'next/link'
import {
    Anchor,
    AtSign,
    BookOpen,
    CheckCircle,
    CloudRain,
    Coffee,
    Droplet,
    Feather,
    Filter,
    Instagram,
    Mail,
    Move,
    Phone,
} from 'react-feather'
import { Card } from '../components/card'
import { Checks } from '../views/checks'
import { motion } from 'framer-motion'
import { fadeIn, leftToRight, rightToLeft } from '../styles/animation'
import Script from 'next/script'

const Curso = () => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-LNBEH0L4R7"
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
													window.dataLayer = window.dataLayer || [];
													function gtag(){dataLayer.push(arguments);}
														gtag('js', new Date());
														gtag('config', 'G-XXXXXXX', {
														page_path: window.location.pathname,
													});
										`,
                }}
            />
            <div className={curso.navbar}>
                <Image
                    src={'/logoWhite.png'}
                    alt="Logo"
                    width={100}
                    height={100}
                    className={curso.logo}
                />
                <Link
                    className={curso.socialMediaWrapper}
                    href={'https://www.instagram.com/phdaquimica/'}
                    target={'_blank'}
                >
                    <Instagram width={20} height={20} />
                    <p>Instagram</p>
                </Link>
            </div>
            <div className={curso.container}>
                <div className={firstView.firstView}>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeIn}
                        viewport={{ amount: 'some' }}
                        className={firstView.titleWrapper}
                        id="firstViewport"
                    >
                        <h1 className={firstView.title}>
                            EXTENSIVO QU??MICA{' '}
                            <span className={firstView.titleBackgroundColor}>
                                {new Date().getFullYear()}
                            </span>
                        </h1>
                        <p className={firstView.subtitle}>
                            N??o deixe a qu??mica ser um obst??culo no seu caminho
                            para entrar na faculdade dos seus sonhos.
                            <br />
                            Prepare-se agora com o curso que leva voc?? do b??sico
                            ao avan??ado.
                        </p>
                        <Link
                            href={'#investment'}
                            className={firstView.leadToPrice}
                        >
                            QUERO FAZER PARTE DA TURMA
                        </Link>
                    </motion.div>
                    {/* <div className={firstView.viewCross}>
                        <Image
                            src={'/9.png'}
                            alt="Logo"
                            width={70}
                            height={70}
                        />
                    </div>   */}
                </div>
                <div className={secondView.secondView}>
                    <h2>
                        Quais conte??dos ser??o abordados ao longo da nossa
                        jornada?
                    </h2>
                    <div className={secondView.cardsWrapper}>
                        <Card>
                            <div className={secondView.card}>
                                <p>Qu??mica Geral</p> <Filter />
                            </div>
                        </Card>
                        <Card>
                            <div className={secondView.card}>
                                <p>F??sico-Qu??mica</p> <Move />
                            </div>
                        </Card>
                        <Card>
                            <div className={secondView.card}>
                                <p>Qu??mica Org??nica</p> <Feather />
                            </div>
                        </Card>
                        <Card>
                            <div className={secondView.card}>
                                <p>Qu??mica Ambiental</p> <Droplet />
                            </div>
                        </Card>
                    </div>
                </div>
                <div className={curso.datesWrapper}>
                    <h2>IN??CIO: 13/03/2023</h2>
                    <h2>T??RMINO: vestibular da UFRGS</h2>
                </div>
                <div className={thirdView.thirdView}>
                    <div>
                        <h2>Por qu?? voc?? deve investir no curso</h2>
                        <h2 className={curso.textPink}>
                            EXTENSIVO QU??MICA 2023?
                        </h2>
                    </div>
                    <Checks
                        icon={<CheckCircle color="green" />}
                        items={[
                            'Metodologia de ensino eficiente, para compreender e aplicar os conceitos qu??micos.',
                            'Aulas interativas e exerc??cios pr??ticos para fixar o conte??do, te preparando para quest??es do ENEM.',
                            'Com o curso, voc?? estar?? apto para desenvolver as 30 habilidades relacionadas a Qu??mica do ENEM!',
                            'Materiais exclusivos e atualizados, de acordo com as exig??ncias dos vestibulares.',
                            'Grupo de atendimento exclusivo',
                        ]}
                    />
                </div>
                <div className={curso.subjectsAbordedWrapper}>
                    <div className={curso.subjectCard}>
                        <a href="#investment">
                            <h2 className={curso.bePartOf}>
                                QUERO FAZER PARTE DA TURMA
                            </h2>
                        </a>
                        <Image
                            src={'/garantia7dias.png'}
                            alt="7 dias de garantia"
                            width={200}
                            height={200}
                        />
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeIn}
                            viewport={{ amount: 'some' }}
                        >
                            Se voc?? n??o gostar do curso nos primeiros 7 dias,
                            devolveremos o valor integral para voc??, sem
                            perguntas e sem ressentimentos. Por??m, garantimos
                            que voc?? n??o ir?? se arrepender ao adquirir o curso.
                            Nos ??ltimos 2 anos, todos os alunos que se
                            matricularam em cursos do pH permaneceram at?? o dia
                            do PR?? PROVA!
                        </motion.p>
                    </div>
                </div>
                <div className={curso.prizes}>
                    <h2>O que voc?? recebe ao se inscrever no curso?</h2>
                    <div className={curso.cardsWrapper}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeIn}
                            viewport={{ amount: 'some' }}
                            className={curso.card}
                        >
                            <h2>3 E-books em PDF</h2>
                            <BookOpen width={100} height={100} />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeIn}
                            viewport={{ amount: 'some' }}
                            className={curso.card}
                        >
                            <h2>1 Caneca do Curso</h2>
                            <Coffee width={100} height={100} />
                        </motion.div>
                    </div>
                </div>
                <div className={fourthView.fourthView}>
                    <h2 id="investment">INVESTIMENTO</h2>
                    <div className={fourthView.cardsWrapper}>
                        <a href="https://www.asaas.com/c/359052882536">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeIn}
                                viewport={{ amount: 'some' }}
                                className={fourthView.card}
                            >
                                <h2>PARCELADO</h2>
                                <h2>10x 149,90</h2>
                                <span>
                                    * SEM TAXA DE MATR??CULA, VALOR INTEGRAL:
                                    R$1499,00{' '}
                                </span>
                            </motion.div>
                        </a>
                        <a href="https://www.asaas.com/c/175516515397">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeIn}
                                viewport={{ amount: 'some' }}
                                className={fourthView.card}
                            >
                                <h2>?? VISTA</h2>
                                <h2>R$1199,20</h2>
                                <span>
                                    * SEM TAXA DE MATR??CULA, 20% DE DESCONTO
                                </span>
                            </motion.div>
                        </a>
                    </div>
                    <footer className={curso.footerContainer}>
                        <div>
                            <p>Qualquer d??vida me chame em</p>

                            <a>
                                <Phone />
                                +55 51993467771
                            </a>
                            <a>
                                <Mail /> contato@phdaquimica.com.br
                            </a>
                        </div>
                        <div>
                            <p>Me Siga</p>

                            <a>
                                <Instagram />
                                @phdaquimica
                            </a>
                        </div>
                        <span>
                            phdaqu??mica <AtSign width={10} height={10} />{' '}
                            {new Date().getFullYear()}
                        </span>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Curso
