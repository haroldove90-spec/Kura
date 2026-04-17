/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from 'react';
import { 
  Search, 
  Calendar, 
  Heart, 
  MessageSquare, 
  User, 
  Bell, 
  ChevronRight, 
  Star, 
  MapPin, 
  ArrowLeft,
  X,
  Stethoscope,
  Smile,
  Bone,
  Activity,
  Accessibility,
  CheckCircle2,
  Clock,
  MoreVertical,
  Baby,
  Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Shadcn UI components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

// Mock Data and Types
import { 
  DOCTORS, 
  APPOINTMENTS, 
  MESSAGES, 
  REVIEWS, 
  CATEGORIES 
} from './mockData';
import { Doctor, Appointment } from './types';

const CategoryIcon = ({ name, className }: { name: string, className?: string }) => {
  switch (name) {
    case 'Ginecólogo': return <Baby className={className} />;
    case 'Dentista': return <Stethoscope className={className} />;
    case 'Psicólogo': return <Smile className={className} />;
    case 'Ortopedista': return <Bone className={className} />;
    case 'Dermatólogo': return <User className={className} />;
    case 'Urólogo': return <Activity className={className} />;
    case 'Fisioterapeuta': return <Accessibility className={className} />;
    default: return <Stethoscope className={className} />;
  }
};

// Components for different views
const HomeView = ({ onSelectCategory, appointments }: { onSelectCategory: (cat: string) => void, appointments: Appointment[] }) => (
  <div className="flex flex-col animate-in fade-in duration-500 bg-background min-h-full">
    <header className="flex justify-between items-center px-6 h-20 bg-white border-b border-border shadow-sm">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 font-extrabold text-2xl tracking-tighter">
          <span className="text-primary italic">Ku</span>
          <span className="text-foreground">ra</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-primary">
          <Bell className="h-6 w-6" />
          <span className="absolute top-2 right-2 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white" />
        </Button>
      </div>
    </header>

    <section className="bg-linear-to-br from-primary to-primary/80 py-12 px-6 flex flex-col gap-6 items-center text-center text-white">
      <h1 className="text-3xl font-bold leading-tight max-w-[280px]">
        Encuentra a tu especialista y agenda cita
      </h1>
      
      <div className="w-full relative group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <Input 
          placeholder="Especialidad o nombre..." 
          className="pl-12 py-7 rounded-2xl border-none shadow-xl focus-visible:ring-white bg-white text-foreground text-lg"
        />
        <Button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-foreground hover:bg-foreground/90 text-white font-bold h-11 px-6">
          Buscar
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mt-2">
        {CATEGORIES.slice(0, 5).map((cat) => (
          <Badge 
            key={cat.id} 
            variant="secondary" 
            className="px-4 py-2 bg-white/20 text-white hover:bg-white/30 border-none rounded-full cursor-pointer transition-all backdrop-blur-md font-medium text-xs flex gap-2 items-center"
            onClick={() => onSelectCategory(cat.name)}
          >
            <CategoryIcon name={cat.name} className="h-3 w-3" />
            {cat.name}
          </Badge>
        ))}
      </div>
    </section>

    <div className="p-6 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-foreground">Próximas citas</h2>
        <Button variant="link" className="text-primary font-bold p-0 h-auto">Ver todas →</Button>
      </div>
      <ScrollArea className="w-full whitespace-nowrap -mx-6 px-6">
        <div className="flex gap-5 pb-4">
          {appointments.map((apt) => (
            <Card key={apt.id} className="w-[300px] shrink-0 border border-border shadow-sm hover:shadow-md transition-shadow overflow-hidden bg-white rounded-2xl">
              <CardContent className="p-5 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div className="flex gap-4 items-center">
                    <Avatar className="h-14 w-14 rounded-2xl border border-muted ring-4 ring-muted/10">
                      <AvatarImage src={apt.doctorImage} alt={apt.doctorName} />
                      <AvatarFallback>{apt.doctorName[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col whitespace-normal">
                      <h3 className="font-bold text-base leading-tight text-foreground">{apt.doctorName}</h3>
                      <p className="text-sm text-muted-foreground">{apt.specialty}</p>
                      <div className="flex items-center gap-1 mt-1 text-yellow-500">
                        <Star className="h-3 w-3 fill-current" />
                        <span className="text-[10px] font-bold text-muted-foreground">(128)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-muted/40 p-3 rounded-xl flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground/80">{apt.date} • {apt.time}</span>
                </div>
                <Button className="w-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-white font-bold h-11 transition-all">
                  Agendar Cita
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>

    <div className="px-6 pb-24">
      <h2 className="text-xl font-bold mb-4 text-foreground">Servicios destacados</h2>
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-white border border-border p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-all cursor-pointer rounded-2xl">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Stethoscope className="h-6 w-6 text-primary" />
            </div>
            <div>
                <span className="font-bold text-sm block">Videoconsulta</span>
                <span className="text-xs text-muted-foreground">Habla con un médico</span>
            </div>
        </Card>
        <Card className="bg-white border border-border p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-all cursor-pointer rounded-2xl">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-primary" />
            </div>
            <div>
                <span className="font-bold text-sm block">Reserva cita</span>
                <span className="text-xs text-muted-foreground">Especialistas cerca</span>
            </div>
        </Card>
      </div>
    </div>
  </div>
);

const SearchView = ({ doctors, onSelectDoctor }: { doctors: Doctor[], onSelectDoctor: (doc: Doctor) => void }) => (
  <div className="flex flex-col gap-0 animate-in slide-in-from-right duration-300 bg-background min-h-full">
    <header className="px-6 py-6 flex flex-col gap-6 bg-white border-b shadow-sm sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <ArrowLeft className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground cursor-pointer" />
          <Input 
            defaultValue="Ginecólogo • Ciudad de México" 
            className="pl-12 h-14 rounded-2xl border-muted/50 bg-muted/20 shadow-none focus-visible:ring-primary"
          />
        </div>
        <Button variant="outline" size="icon" className="rounded-2xl h-14 w-14 shrink-0 border-muted">
          <MoreVertical className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        <Badge variant="outline" className="bg-white px-5 py-2.5 rounded-full border-border text-foreground font-bold whitespace-nowrap shadow-xs cursor-pointer hover:bg-muted/50 transition-colors">Filtro</Badge>
        <Badge variant="outline" className="bg-white px-5 py-2.5 rounded-full border-border text-foreground font-bold whitespace-nowrap shadow-xs cursor-pointer hover:bg-muted/50 transition-colors">Mi seguro</Badge>
        <Badge variant="outline" className="bg-primary/10 text-primary px-5 py-2.5 rounded-full border-primary/20 font-bold whitespace-nowrap shadow-xs cursor-pointer">Fechas disponibles</Badge>
      </div>
    </header>

    <div className="bg-background p-4 text-center">
       <span className="text-xs font-bold text-muted-foreground tracking-widest uppercase">
          {doctors.length} especialistas encontrados
       </span>
    </div>

    <ScrollArea className="flex-1 overflow-y-auto px-6">
      <div className="flex flex-col gap-6 pb-32">
        {doctors.map((doc) => (
          <Card key={doc.id} className="border border-border shadow-sm hover:shadow-xl transition-all cursor-pointer rounded-2xl bg-white overflow-hidden group" onClick={() => onSelectDoctor(doc)}>
            <CardContent className="p-0 flex flex-col">
              <div className="p-5 flex gap-5">
                <div className="relative">
                    <Avatar className="h-24 w-24 rounded-2xl shadow-md group-hover:scale-105 transition-transform">
                      <AvatarImage src={doc.image} alt={doc.name} className="object-cover" />
                      <AvatarFallback>{doc.name[0]}</AvatarFallback>
                    </Avatar>
                    {doc.isPremium && <div className="absolute -top-1 -right-1 h-4 w-4 bg-primary rounded-full border-2 border-white shadow-sm" />}
                </div>
                <div className="flex flex-col flex-1 py-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-extrabold text-xl flex items-center gap-1.5 text-foreground leading-tight">
                        {doc.name}
                        <CheckCircle2 className="h-4 w-4 text-primary fill-primary text-white" />
                      </h3>
                      <p className="text-sm font-bold text-primary mt-0.5">{doc.specialty}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-3">
                    <div className="flex gap-0.5 text-yellow-500">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(doc.ratingValue) ? 'fill-current' : 'text-muted-foreground/30'}`} />
                        ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-1 font-bold">({doc.ratingCount})</span>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 flex flex-col gap-4">
                <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-muted/40 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex flex-col">
                       <p className="text-sm font-bold text-foreground/80">{doc.location}</p>
                       <p className="text-xs text-muted-foreground font-medium uppercase tracking-tight">Ciudad De México</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-muted/40 flex items-center justify-center shrink-0">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <p className="text-sm font-bold">Próxima: <span className="text-muted-foreground font-medium">Jueves, 17 marzo</span></p>
                </div>

                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide pt-2">
                    {['11:20', '12:20', '12:40', '14:30'].map((time) => (
                    <Button key={time} variant="secondary" className="bg-transparent border border-muted-foreground/10 text-foreground hover:bg-primary hover:text-white hover:border-primary font-bold text-xs py-2 px-6 rounded-xl transition-all">
                        {time}
                    </Button>
                    ))}
                    <Button variant="ghost" size="sm" className="text-primary font-bold text-xs px-2">Ver más</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
    
    <div className="fixed bottom-28 left-1/2 -translate-x-1/2 z-30 w-full max-w-[calc(100%-2rem)] sm:max-w-md md:max-w-2xl lg:max-w-3xl flex justify-center pointer-events-none">
       <Button className="rounded-full shadow-2xl bg-foreground hover:bg-foreground/90 flex gap-2 h-14 px-8 text-white font-black tracking-wide text-base pointer-events-auto">
          <MapPin className="h-5 w-5" />
          VER MAPA
       </Button>
    </div>
  </div>
);

const DoctorDetailView = ({ doctor, onBack }: { doctor: Doctor, onBack: () => void }) => (
  <div className="flex flex-col h-full bg-white animate-in slide-in-from-bottom duration-300 overflow-hidden">
    <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-md px-6 py-5 flex items-center justify-between border-b shadow-sm">
      <Button variant="ghost" size="icon" onClick={onBack} className="rounded-xl hover:bg-muted/50">
        <ArrowLeft className="h-6 w-6" />
      </Button>
      <h2 className="font-extrabold text-foreground tracking-tight text-center flex-1">{doctor.name}</h2>
      <Button variant="ghost" size="icon" className="rounded-xl hover:bg-muted/50">
        <Heart className="h-6 w-6 text-muted-foreground" />
      </Button>
    </header>

    <ScrollArea className="flex-1">
      <div className="p-6 flex flex-col gap-8">
        <div className="flex gap-6 items-start">
          <Avatar className="h-32 w-32 rounded-3xl border-4 border-white shadow-xl ring-1 ring-border">
            <AvatarImage src={doctor.image} className="object-cover" />
            <AvatarFallback>{doctor.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col py-1 overflow-hidden flex-1">
            {doctor.isPremium && <Badge className="bg-primary/10 text-primary border-none text-[10px] font-black px-2 py-0.5 rounded-md w-fit mb-3">PREMIUM PLUS</Badge>}
            <h1 className="text-2xl font-black flex items-center gap-2 mb-1 text-foreground leading-tight">
              {doctor.name}
              <CheckCircle2 className="h-5 w-5 text-primary fill-primary text-white shrink-0" />
            </h1>
            <p className="text-primary font-bold text-base">{doctor.specialty}</p>
            <div className="flex items-center gap-1.5 mt-3 text-yellow-500">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 fill-current`} />
                ))}
              </div>
              <span className="text-sm font-bold text-muted-foreground ml-1">{doctor.ratingCount} opiniones</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button className="bg-primary hover:bg-primary/90 text-white flex gap-2 h-16 rounded-2xl text-base font-black shadow-lg shadow-primary/20">
            <Calendar className="h-5 w-5" /> Agendar cita
          </Button>
          <Button variant="outline" className="border-border flex gap-2 h-16 rounded-2xl text-base font-black shadow-sm bg-white hover:bg-muted/20 text-foreground">
             Enviar mensaje
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 bg-muted/30 py-3 rounded-2xl border border-border/50 text-sm font-bold text-muted-foreground">
          <Activity className="h-4 w-4 text-primary" />
          {doctor.visitsInLast30Days.toLocaleString()} visitas recientes
        </div>

        <Tabs defaultValue="consultorios" className="w-full">
          <TabsList className="w-full justify-start bg-transparent h-14 border-b rounded-none p-0 overflow-x-auto scrollbar-hide gap-8">
            <TabsTrigger value="consultorios" className="rounded-none border-b-4 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 font-black h-full whitespace-nowrap text-base text-muted-foreground data-[state=active]:text-foreground transition-all">Consultorios</TabsTrigger>
            <TabsTrigger value="precios" className="rounded-none border-b-4 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 font-black h-full whitespace-nowrap text-base text-muted-foreground data-[state=active]:text-foreground transition-all">Precios</TabsTrigger>
            <TabsTrigger value="opiniones" className="rounded-none border-b-4 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 font-black h-full whitespace-nowrap text-base text-muted-foreground data-[state=active]:text-foreground transition-all">Opiniones</TabsTrigger>
          </TabsList>
          
          <TabsContent value="consultorios" className="py-8 flex flex-col gap-8">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-black text-foreground">Sedes disponibles</h3>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-none font-bold">3 consultorios</Badge>
            </div>
            
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
               <Badge className="bg-foreground text-white border-none px-5 py-3 rounded-2xl font-bold whitespace-nowrap cursor-pointer shadow-md">Dirección Principal</Badge>
               <Badge variant="outline" className="text-muted-foreground border-border px-5 py-3 rounded-2xl font-bold whitespace-nowrap cursor-pointer bg-white">Sede Norte</Badge>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-5">
                <div className="h-12 w-12 rounded-2xl bg-muted/40 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="flex flex-col gap-1.5 flex-1 pt-1">
                  <p className="font-extrabold text-lg text-foreground leading-tight">{doctor.location}</p>
                  <p className="text-muted-foreground font-medium uppercase text-xs tracking-tight">Centro Origen • Ciudad De México</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-3xl flex flex-col gap-5 border border-border shadow-sm">
                 <div className="flex items-center gap-4">
                   <Clock className="h-6 w-6 text-primary" />
                   <p className="font-bold text-foreground">Disponibilidad: <span className="font-medium text-muted-foreground">Jueves, 17 marzo</span></p>
                 </div>
                 <Button className="w-full bg-primary/10 text-primary hover:bg-primary/20 font-black px-6 py-7 rounded-2xl shadow-none border-none text-base">
                   VER CALENDARIO COMPLETO
                 </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="opiniones">
              <div className="py-8 flex flex-col gap-8">
                <div className="flex items-center justify-between">
                   <h3 className="text-xl font-black text-foreground">Experiencias reales</h3>
                   <Button variant="link" className="text-primary font-black px-0 text-base">Ver todas →</Button>
                </div>
                <ScrollArea className="w-full whitespace-nowrap -mx-6 px-6">
                   <div className="flex gap-5 pb-4">
                     {REVIEWS.map(rev => (
                       <Card key={rev.id} className="w-[320px] shrink-0 border border-border shadow-sm p-6 flex flex-col gap-4 whitespace-normal rounded-3xl bg-white">
                          <div className="flex justify-between items-start">
                            <div className="flex gap-4 items-center">
                              <Avatar className="h-12 w-12 rounded-2xl border border-muted ring-4 ring-muted/5">
                                <AvatarImage src={rev.avatar} />
                                <AvatarFallback>{rev.author[0]}</AvatarFallback>
                              </Avatar>
                              <div className="flex flex-col">
                                <span className="font-extrabold text-foreground">{rev.author}</span>
                                <div className="flex gap-0.5 text-yellow-500">
                                  {Array.from({length: 5}).map((_, i) => (
                                    <Star key={i} className="h-3 w-3 fill-current" />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <span className="text-[10px] text-muted-foreground font-black uppercase tracking-tighter">{rev.date}</span>
                          </div>
                          <p className="text-sm text-foreground/70 font-medium leading-relaxed italic">"{rev.text}"</p>
                       </Card>
                     ))}
                   </div>
                </ScrollArea>
              </div>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  </div>
);

const MessagesView = () => (
    <div className="flex flex-col h-full animate-in fade-in duration-500 bg-background min-h-full">
        <header className="px-6 pt-16 pb-6 bg-white border-b shadow-xs">
            <h1 className="text-3xl font-black text-foreground tracking-tight">Mensajes</h1>
            <p className="text-primary font-black uppercase text-[11px] tracking-widest mt-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Bandeja de entrada
            </p>
        </header>
        <ScrollArea className="flex-1">
            <div className="flex flex-col px-6 pb-32">
                {MESSAGES.map(msg => (
                    <div key={msg.id} className="flex gap-5 py-6 border-b border-border last:border-none relative group cursor-pointer hover:bg-white/60 transition-all rounded-xl mt-2 first:mt-4">
                        {msg.unread && <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_rgba(0,165,168,0.4)]" />}
                        <Avatar className="h-16 w-16 rounded-2xl bg-white border border-border shadow-xs">
                            <AvatarImage src={msg.image} className="object-cover" />
                            <AvatarFallback>{msg.senderName[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col flex-1 gap-1.5">
                            <div className="flex justify-between items-center">
                                <h3 className="font-extrabold text-lg text-foreground leading-none">{msg.senderName}</h3>
                                <span className="text-[10px] text-muted-foreground font-black uppercase tracking-tighter">{msg.time}</span>
                            </div>
                            <p className={`text-sm line-clamp-1 ${msg.unread ? 'font-bold text-foreground/80' : 'text-muted-foreground font-medium'}`}>{msg.text}</p>
                            {!msg.unread && <CheckCircle2 className="h-4 w-4 text-primary self-end opacity-40 shrink-0" />}
                        </div>
                    </div>
                ))}
            </div>
        </ScrollArea>
    </div>
);

const AppointmentsView = () => (
    <div className="flex flex-col h-full animate-in fade-in duration-500 bg-background min-h-full">
        <header className="px-6 pt-16 pb-6 bg-white border-b shadow-xs">
            <h1 className="text-3xl font-black text-foreground tracking-tight">Mis Citas</h1>
            <p className="text-primary font-black uppercase text-[11px] tracking-widest mt-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Próximas visitas
            </p>
        </header>
        <ScrollArea className="flex-1">
            <div className="flex flex-col gap-10 px-6 py-10 pb-40">
                <div className="flex flex-col gap-6">
                    {APPOINTMENTS.map(apt => (
                        <Card key={apt.id} className="border border-border shadow-md p-6 flex flex-col gap-6 bg-white rounded-3xl group hover:shadow-xl transition-all">
                           <div className="flex justify-between items-start">
                              <div className="flex flex-col gap-1">
                                <span className="font-black text-primary text-[10px] uppercase tracking-widest">{apt.specialty}</span>
                                <h3 className="font-extrabold text-xl text-foreground group-hover:text-primary transition-colors">{apt.doctorName}</h3>
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="bg-muted px-3 py-1 rounded-lg text-xs font-bold text-foreground/70">{apt.date}</div>
                                    <div className="bg-muted px-3 py-1 rounded-lg text-xs font-bold text-foreground/70">{apt.time}</div>
                                </div>
                              </div>
                              <Avatar className="h-16 w-16 rounded-2xl shadow-lg ring-4 ring-muted/10 shrink-0">
                                <AvatarImage src={apt.doctorImage} className="object-cover" />
                                <AvatarFallback>{apt.doctorName[0]}</AvatarFallback>
                              </Avatar>
                           </div>
                           <div className="flex flex-col gap-6 pt-2">
                                <div className="flex gap-5 items-center">
                                    <div className="h-14 w-[3px] bg-primary relative shrink-0 rounded-full">
                                        <div className="absolute -top-1 -left-[5px] h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20" />
                                        <div className="absolute bottom-0 -left-[5px] h-3 w-3 rounded-full bg-primary ring-4 ring-primary/20 animate-pulse" />
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-black text-foreground underline decoration-primary decoration-4 underline-offset-4">Visita confirmada</span>
                                            <CheckCircle2 className="h-6 w-6 text-primary fill-primary text-white" />
                                        </div>
                                        <div className="flex justify-between items-center mt-6 p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 cursor-pointer transition-colors border border-border/50">
                                            <span className="text-sm font-black flex items-center gap-3">
                                                Preparar consulta
                                                <div className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
                                            </span>
                                            <ChevronRight className="h-5 w-5 text-muted-foreground" />
                                        </div>
                                    </div>
                                </div>
                           </div>
                        </Card>
                    ))}
                    
                    <div className="flex flex-col gap-6 mt-8">
                        <h2 className="font-black text-xs uppercase tracking-[0.2rem] text-muted-foreground">Historial de visitas</h2>
                        <Card className="border border-border/50 shadow-xs p-6 bg-white/50 rounded-3xl saturate-50 opacity-80">
                             <div className="flex justify-between items-center">
                                <div className="flex flex-col gap-1">
                                    <span className="font-bold text-[9px] uppercase tracking-tighter text-muted-foreground">Agendado por sistema</span>
                                    <h3 className="font-extrabold text-lg text-foreground">Dr. Andrés Muñoz</h3>
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Dermatología • Nov 2021</p>
                                </div>
                                <Avatar className="h-14 w-14 rounded-2xl grayscale opacity-50 border border-border">
                                    <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300" />
                                </Avatar>
                             </div>
                        </Card>
                    </div>
                </div>
            </div>
        </ScrollArea>
    </div>
);

const ProfileView = () => (
    <div className="flex flex-col h-full bg-background animate-in fade-in duration-500 min-h-full">
        <ScrollArea className="flex-1">
            <div className="flex flex-col items-center pt-24 pb-16 gap-6 bg-white border-b shadow-xs">
                <div className="relative">
                     <svg className="absolute inset-[-14px] h-[132px] w-[132px] -rotate-90">
                        <circle cx="66" cy="66" r="60" fill="none" stroke="currentColor" strokeWidth="3" className="text-muted/10" />
                        <circle cx="66" cy="66" r="60" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary" strokeDasharray="376.99" strokeDashoffset="94.25" />
                     </svg>
                     <Avatar className="h-28 w-28 border-4 border-white shadow-2xl relative z-10 rounded-3xl">
                        <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=300" className="object-cover" />
                        <AvatarFallback>MC</AvatarFallback>
                     </Avatar>
                     <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-foreground text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-xl z-20 ring-4 ring-white">75% COMPLETADO</div>
                </div>
                <div className="flex flex-col items-center gap-1.5 mt-2">
                    <h2 className="text-2xl font-black tracking-tight text-foreground">Mariana Calderón</h2>
                    <p className="text-muted-foreground font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                        <MapPin className="h-3 w-3 text-primary" />
                        Ciudad de México, MX
                    </p>
                </div>
            </div>
            
            <div className="flex flex-col gap-5 px-6 py-10 pb-40">
                {[
                    { icon: User, label: 'Información básica', status: 'Verificado', statusColor: 'bg-primary/10 text-primary', sub: 'Mariana • Mujer • 28 años' },
                    { icon: Stethoscope, label: 'Seguro médico', status: 'Pendiente', statusColor: 'bg-yellow-100 text-yellow-700', sub: 'Actualiza tu póliza Allianz' },
                    { icon: MapPin, label: 'Direcciones', status: '2 sedes', statusColor: 'bg-muted text-muted-foreground', sub: 'Avenida Universidad 1281, CDMX' },
                    { icon: Activity, label: 'Historial clínico', status: 'Incompleto', statusColor: 'bg-red-50 text-red-600', sub: 'Faltan registros médicos' },
                ].map((item, i) => (
                    <Card key={i} className="border border-border shadow-sm p-4 cursor-pointer hover:bg-white transition-all active:scale-[0.98] rounded-2xl bg-white group">
                        <div className="flex gap-5">
                            <div className="h-12 w-12 rounded-2xl bg-muted/30 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                                <item.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <div className="flex flex-col flex-1 gap-1.5 justify-center">
                                <div className="flex justify-between items-center">
                                    <span className="font-extrabold text-sm tracking-tight text-foreground">{item.label}</span>
                                    <Badge variant="secondary" className={`${item.statusColor} text-[9px] font-black border-none px-2 rounded-md shadow-xs`}>{item.status}</Badge>
                                </div>
                                <p className="text-[11px] text-muted-foreground leading-relaxed font-bold line-clamp-1">{item.sub}</p>
                            </div>
                            <ChevronRight className="h-5 w-5 text-muted-foreground/30 self-center group-hover:text-primary transition-colors" />
                        </div>
                    </Card>
                ))}
                
                <Button variant="ghost" className="w-full justify-center text-red-500 font-black h-16 rounded-2xl bg-red-50 hover:bg-red-100 mt-6 tracking-wide border border-red-100">
                   CERRAR SESIÓN
                </Button>
            </div>
        </ScrollArea>
    </div>
);

export default function App() {
  const [activeView, setActiveView] = React.useState('buscar');
  const [selectedDoctor, setSelectedDoctor] = React.useState<Doctor | null>(null);
  const [appointments] = React.useState<Appointment[]>(APPOINTMENTS);
  const [showSplash, setShowSplash] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const switchView = (view: string) => {
    setActiveView(view);
    setSelectedDoctor(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDoctor = (doc: Doctor) => {
    setSelectedDoctor(doc);
  };

  const handleSelectCategory = (cat: string) => {
    setActiveView('search-results');
    setSelectedDoctor(null);
  };

  if (showSplash) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[9999] animate-in fade-in zoom-in duration-1000">
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
        >
            <img 
                src="https://appdesignproyectos.com/kura.jpeg" 
                alt="Kura" 
                className="w-48 h-auto object-contain rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
            />
            <div className="flex flex-col items-center gap-1">
                <h1 className="text-3vw font-black tracking-tight text-foreground flex items-center gap-1">
                    <span className="text-primary italic">Ku</span>ra
                </h1>
                <p className="text-muted-foreground font-bold text-xs uppercase tracking-widest">Salud en tus manos</p>
            </div>
            <div className="mt-8 flex gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                <div className="h-2 w-2 rounded-full bg-primary animate-bounce" />
            </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/20 flex justify-center">
      <div className="w-full sm:max-w-md md:max-w-2xl lg:max-w-3xl bg-white flex flex-col relative overflow-hidden shadow-2xl ring-1 ring-border min-h-screen selection:bg-primary/30">
        {/* Dynamic Content */}
        <div className="flex-1 relative overflow-hidden flex flex-col">
        <AnimatePresence mode="wait">
          {selectedDoctor ? (
             <motion.div 
               key="doctor-detail"
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: 20 }}
               className="h-full flex flex-col"
             >
               <DoctorDetailView doctor={selectedDoctor} onBack={() => setSelectedDoctor(null)} />
             </motion.div>
          ) : activeView === 'buscar' ? (
              <motion.div key="home" className="h-full overflow-y-auto pb-24" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <HomeView onSelectCategory={handleSelectCategory} appointments={appointments} />
              </motion.div>
          ) : activeView === 'search-results' ? (
              <motion.div key="search" className="h-full flex flex-col" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <SearchView doctors={DOCTORS} onSelectDoctor={handleSelectDoctor} />
              </motion.div>
          ) : activeView === 'citas' ? (
              <motion.div key="appointments" className="h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <AppointmentsView />
              </motion.div>
          ) : activeView === 'mensajes' ? (
              <motion.div key="messages" className="h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <MessagesView />
              </motion.div>
          ) : (
              <motion.div key="profile" className="h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <ProfileView />
              </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Rail */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full sm:max-w-md md:max-w-2xl lg:max-w-3xl bg-white/95 backdrop-blur-xl border-t border-border px-4 py-4 pb-10 flex justify-around items-center z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.04)]">
        {[
          { id: 'buscar', icon: Search, label: 'Busca' },
          { id: 'citas', icon: Calendar, label: 'Citas' },
          { id: 'mensajes', icon: MessageSquare, label: 'Chats' },
          { id: 'perfil', icon: User, label: 'Tú' },
        ].map((item) => {
          const isActive = activeView === item.id || (activeView === 'search-results' && item.id === 'buscar');
          return (
            <button
              key={item.id}
              onClick={() => switchView(item.id)}
              className={`flex flex-col items-center gap-1.5 transition-all duration-300 relative group`}
            >
              <div className={`p-2.5 rounded-2xl transition-all duration-300 ${isActive ? 'bg-primary/10 text-primary scale-110 shadow-xs' : 'text-muted-foreground group-hover:bg-muted/50'}`}>
                <item.icon className={`h-6 w-6 ${isActive ? 'stroke-[2.5px]' : 'stroke-[2px]'}`} />
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${isActive ? 'text-primary opacity-100' : 'opacity-40 text-foreground group-hover:opacity-100'}`}>
                {item.label}
              </span>
              {isActive && (
                <motion.div 
                    layoutId="nav-dot"
                    className="absolute -top-1 left-1/2 -translate-x-1/2 h-1 w-1 bg-primary rounded-full shadow-[0_0_8px_rgba(0,165,168,0.5)]"
                />
              )}
            </button>
          );
        })}
      </nav>
    </div>
    </div>
  );
}
