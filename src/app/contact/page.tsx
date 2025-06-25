"use client"
import { Card } from "@/components/ui/card"
import { IuhLogo } from "@/components/ui/iuh-logo"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="relative min-h-[calc(100vh-128px)] w-full overflow-hidden">
            <div className="absolute inset-0 z-0">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4770094770837!2d106.68539697593259!3d10.851219857827003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529b6a2b351a5%3A0x11690ada8c36f9bc!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2hp4buHcCBUUC5IQ0M!5e0!3m2!1svi!2s!4v1722421319771!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bản đồ vị trí Trường Đại học Công nghiệp TP.HCM"
                    className="grayscale"
                ></iframe>
                <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-128px)] p-4 sm:p-8">
                <Card className="w-full max-w-5xl grid md:grid-cols-2 shadow-2xl overflow-hidden bg-card/90">
                    <div className="p-8 space-y-6 flex flex-col justify-between">
                        <div>
                            <IuhLogo className="mb-6" />
                            <p className="text-muted-foreground">
                                Nếu có thắc mắc về các vấn đề về học phí, các bạn sinh viên vui lòng liên hệ với phòng Tài chính - Kế toán thông qua ứng dụng chat trên fanpage. Chúng tôi sẽ cố gắng trả lời trong thời gian sớm nhất. Trân trọng!
                            </p>
                        </div>
                        <div className="space-y-4 text-sm pt-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                <p>Tầng trệt - Nhà E - 12 Nguyễn Văn Bảo, P.1 Gò Vấp, Thành phố Hồ Chí Minh</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold">Liên hệ trực tiếp qua Fanpage:</p>
                                    <a href="https://www.facebook.com/ptckt.iuh" target="_blank" rel="noopener noreferrer" className="hover:underline text-primary break-all">
                                        https://www.facebook.com/ptckt.iuh
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                <p>0283-8940-390, nội bộ: 124, 125, 585</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 bg-muted/50 flex flex-col">
                        <h2 className="text-2xl font-headline font-bold text-primary mb-4 text-center uppercase">
                            Liên hệ qua chat trên Fanpage
                        </h2>
                        <div className="flex-grow rounded-md overflow-hidden border">
                             <iframe
                                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fptckt.iuh&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                                width="100%"
                                height="100%"
                                style={{ border: 'none', overflow: 'hidden' }}
                                scrolling="no"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                title="Facebook Fanpage của Phòng Tài chính Kế Toán-IUH"
                            ></iframe>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
