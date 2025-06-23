"use client"

import * as React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { documentData } from "@/lib/data"
import { Download, FileText, FileCode } from "lucide-react"

export default function DocumentsPage() {
  const [search, setSearch] = React.useState("")
  const [typeFilter, setTypeFilter] = React.useState("all")
  const [agencyFilter, setAgencyFilter] = React.useState("all")
  const [yearFilter, setYearFilter] = React.useState("all")

  const filteredDocuments = documentData.filter(doc => {
    return (
      doc.name.toLowerCase().includes(search.toLowerCase()) &&
      (typeFilter === "all" || doc.type === typeFilter) &&
      (agencyFilter === "all" || doc.agency === agencyFilter) &&
      (yearFilter === "all" || doc.year.toString() === yearFilter)
    )
  })

  const uniqueAgencies = [...new Set(documentData.map(doc => doc.agency))];
  const uniqueYears = [...new Set(documentData.map(doc => doc.year))].sort((a,b) => b-a);
  const uniqueTypes = [...new Set(documentData.map(doc => doc.type))];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Documents & Forms Library</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Access a comprehensive repository of official documents, forms, and reports.
        </p>
      </div>

      <div className="bg-card p-4 sm:p-6 rounded-lg border mb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Input
            placeholder="Search documents..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="lg:col-span-2"
          />
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger><SelectValue placeholder="Filter by Type" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {uniqueTypes.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={agencyFilter} onValueChange={setAgencyFilter}>
            <SelectTrigger><SelectValue placeholder="Filter by Agency" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Agencies</SelectItem>
              {uniqueAgencies.map(agency => <SelectItem key={agency} value={agency}>{agency}</SelectItem>)}
            </SelectContent>
          </Select>
           <Select value={yearFilter} onValueChange={setYearFilter}>
            <SelectTrigger><SelectValue placeholder="Filter by Year" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              {uniqueYears.map(year => <SelectItem key={year} value={year.toString()}>{year}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-2/5">Document Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Agency</TableHead>
              <TableHead>Year</TableHead>
              <TableHead className="text-right">Download</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDocuments.length > 0 ? (
                filteredDocuments.map(doc => (
                <TableRow key={doc.id}>
                    <TableCell className="font-medium flex items-center gap-2">
                        {doc.format === "PDF" ? <FileText className="h-5 w-5 text-red-500" /> : <FileCode className="h-5 w-5 text-blue-500" />}
                        {doc.name}
                    </TableCell>
                    <TableCell>{doc.type}</TableCell>
                    <TableCell>{doc.agency}</TableCell>
                    <TableCell>{doc.year}</TableCell>
                    <TableCell className="text-right">
                    <Button asChild variant="ghost" size="icon">
                        <a href={doc.fileUrl} download><Download className="h-5 w-5" /></a>
                    </Button>
                    </TableCell>
                </TableRow>
                ))
            ) : (
                <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center">
                        No documents found.
                    </TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
