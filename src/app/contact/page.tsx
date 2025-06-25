"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/language-context"
import { Mail, Phone, MapPin } from "lucide-react"
import { IuhLogo } from "@/components/ui/iuh-logo"

export default function ContactPage() {
    const { t } = useLanguage()
    
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">{t('contact')}</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    {t('contactSubtitle')}
                </p>
            </div>

            <div className="max-w-6xl mx-auto mb-12">
                <Card>
                    <CardHeader>
                        <CardTitle>{t('ourLocation')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="aspect-video w-full rounded-md overflow-hidden border">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4770094770837!2d106.68539697593259!3d10.851219857827003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529b6a2b351a5%3A0x11690ada8c36f9bc!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2hp4buHcCBUUC5IQ0M!5e0!3m2!1svi!2s!4v1722421319771!5m2!1svi!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Bản đồ vị trí Trường Đại học Công nghiệp TP.HCM"
                            ></iframe>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle>{t('contactForm')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <Label htmlFor="name">{t('fullName')}</Label>
                                    <Input id="name" placeholder={t('fullName')} />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="email">{t('emailAddress')}</Label>
                                <Input id="email" type="email" placeholder={t('emailAddress')} />
                            </div>
                            <div>
                                <Label htmlFor="subject">{t('subject')}</Label>
                                <Input id="subject" placeholder={t('subject')} />
                            </div>
                            <div>
                                <Label htmlFor="message">{t('message')}</Label>
                                <Textarea id="message" placeholder={t('message')} rows={5} />
                            </div>
                            <Button type="submit">{t('sendMessage')}</Button>
                        </form>
                    </CardContent>
                </Card>

                <div className="space-y-8">
                     <Card>
                        <CardHeader>
                            <CardTitle>{t('contactInfo')}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-muted-foreground">
                            <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-foreground">{t('address')}</h4>
                                    <p>Trường Đại học Công nghiệp TP.HCM, 12 Nguyễn Văn Bảo, Phường 1, Gò Vấp, Hồ Chí Minh 700000</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Phone</h4>
                                    <p>(028) 3894 0390</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-foreground">Email</h4>
                                    <p>
                                        <a href="mailto:contact@phongkhdt.iuh.edu.vn" className="hover:text-primary hover:underline">
                                            contact@phongkhdt.iuh.edu.vn
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>{t('contactViaFanpage')}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="mb-4 flex justify-center">
                                <IuhLogo />
                            </div>
                             <p className="text-muted-foreground mb-4 text-center text-sm">
                                {t('fanpageContactPrompt')}
                            </p>
                            <div className="aspect-video w-full rounded-md overflow-hidden border">
                                <iframe
                                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fptckt.iuh&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                    title={t('contactViaFanpage')}
                                ></iframe>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
