from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "apexnix-b2b-bed-frame-size-confirmation-checklist.pdf"

CHECKLIST_ITEMS = [
    "Target country or region",
    "Sales channel and intended use",
    "Retail size name",
    "Nominal mattress width and length",
    "Measurement unit: inches, centimetres or millimetres",
    "Required inner mattress-fit dimensions",
    "Maximum acceptable overall product dimensions",
    "Bed height and under-bed clearance",
    "Headboard and footboard direction",
    "Support system, slats, centre support and leg configuration",
    "Material combination, such as metal structure or bamboo frame with steel slats",
    "Finish and colour direction",
    "Hardware and assembly requirements",
    "Packaging, labels and instruction requirements",
    "Reference drawing, image, sample or product link, if available",
    "Required market testing or compliance review, if applicable",
]

DISCLAIMER = (
    "The dimensions in this guide are commonly referenced nominal market sizes and are provided for early B2B "
    "discussion. Actual products, manufacturing tolerances and local retail conventions can vary. Final "
    "compatibility must be confirmed through the buyer's requirements and the approved product specification."
)


def wrap_text(text, font_name, font_size, max_width):
    words = text.split()
    lines = []
    current = ""
    for word in words:
        candidate = word if not current else f"{current} {word}"
        if stringWidth(candidate, font_name, font_size) <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_wrapped(pdf, text, x, y, max_width, font_name, font_size, leading, color, max_lines=None):
    lines = wrap_text(text, font_name, font_size, max_width)
    if max_lines is not None:
        lines = lines[:max_lines]
    pdf.setFont(font_name, font_size)
    pdf.setFillColor(color)
    for line in lines:
        pdf.drawString(x, y, line)
        y -= leading
    return y


def build_pdf():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    width, height = A4
    pdf = canvas.Canvas(str(OUTPUT), pagesize=A4, pageCompression=1)
    pdf.setTitle("Apexnix B2B Bed Frame Size Confirmation Checklist")
    pdf.setAuthor("Apexnix Product Team")
    pdf.setSubject("Printable B2B bed frame size sourcing checklist")
    pdf.setCreator("Apexnix")

    ink = HexColor("#202B35")
    muted = HexColor("#5B6977")
    accent = HexColor("#60755C")
    gold = HexColor("#C59A55")
    line = HexColor("#DCE1DA")
    soft = HexColor("#F1F3ED")
    paper = HexColor("#FCFBF8")

    pdf.setFillColor(paper)
    pdf.rect(0, 0, width, height, fill=1, stroke=0)
    pdf.setFillColor(accent)
    pdf.rect(0, height - 8, width, 8, fill=1, stroke=0)

    margin = 42
    pdf.setFillColor(ink)
    pdf.roundRect(margin, height - 66, 26, 26, 5, fill=1, stroke=0)
    pdf.setFillColor(HexColor("#FFFFFF"))
    pdf.setFont("Helvetica-Bold", 17)
    pdf.drawCentredString(margin + 13, height - 59, "A")
    pdf.setFillColor(ink)
    pdf.setFont("Helvetica", 23)
    pdf.drawString(margin + 34, height - 61, "Apexnix")
    pdf.setFont("Helvetica", 8)
    pdf.setFillColor(muted)
    pdf.drawRightString(width - margin, height - 56, "GLOBAL BED FRAME SIZE GUIDE")

    pdf.setFillColor(gold)
    pdf.setFont("Helvetica-Bold", 8.5)
    pdf.drawString(margin, height - 98, "PRINTABLE SOURCING TOOL")
    pdf.setFillColor(ink)
    pdf.setFont("Times-Bold", 26)
    pdf.drawString(margin, height - 132, "B2B Bed Frame Size")
    pdf.drawString(margin, height - 163, "Confirmation Checklist")

    intro = (
        "Before requesting a quotation, sample or new product development, provide the information currently "
        "available. Confirm every item before production approval."
    )
    draw_wrapped(pdf, intro, margin, height - 190, width - (2 * margin), "Helvetica", 10.2, 15, muted)

    meta_y = height - 256
    pdf.setFillColor(soft)
    pdf.roundRect(margin, meta_y, width - (2 * margin), 43, 5, fill=1, stroke=0)
    pdf.setFillColor(accent)
    pdf.rect(margin, meta_y, 3, 43, fill=1, stroke=0)
    pdf.setFillColor(ink)
    pdf.setFont("Helvetica-Bold", 9.5)
    pdf.drawString(margin + 14, meta_y + 27, "Apexnix - Global Bed Frame Size Guide for B2B Buyers")
    pdf.setFillColor(muted)
    pdf.setFont("Helvetica", 8.4)
    pdf.drawString(margin + 14, meta_y + 12, "www.apexnix.com/insights/bed-frame-size-guide-us-uk-eu/")

    checklist_top = meta_y - 28
    pdf.setFillColor(ink)
    pdf.setFont("Helvetica-Bold", 11)
    pdf.drawString(margin, checklist_top, "BUYER SIZE BRIEF")
    pdf.setStrokeColor(line)
    pdf.setLineWidth(0.8)
    pdf.line(margin, checklist_top - 8, width - margin, checklist_top - 8)

    column_gap = 24
    column_width = (width - (2 * margin) - column_gap) / 2
    row_height = 35
    items_top = checklist_top - 28
    for index, item in enumerate(CHECKLIST_ITEMS):
        column = 0 if index < 8 else 1
        row = index if index < 8 else index - 8
        x = margin + column * (column_width + column_gap)
        y = items_top - row * row_height

        pdf.setStrokeColor(accent)
        pdf.setLineWidth(0.9)
        pdf.roundRect(x, y - 9, 10, 10, 1.5, fill=0, stroke=1)
        draw_wrapped(pdf, item, x + 17, y, column_width - 17, "Helvetica", 8.6, 10.5, muted, max_lines=2)
        pdf.setStrokeColor(line)
        pdf.setLineWidth(0.5)
        pdf.line(x, y - 18, x + column_width, y - 18)

    notes_y = items_top - (8 * row_height) - 3
    pdf.setFillColor(ink)
    pdf.setFont("Helvetica-Bold", 9.5)
    pdf.drawString(margin, notes_y, "PROJECT NOTES / OPEN POINTS")
    pdf.setStrokeColor(HexColor("#BFC8BF"))
    for offset in (16, 34, 52):
        pdf.line(margin, notes_y - offset, width - margin, notes_y - offset)

    disclaimer_y = notes_y - 72
    pdf.setFillColor(muted)
    pdf.setFont("Helvetica-Bold", 7.6)
    pdf.drawString(margin, disclaimer_y, "REFERENCE NOTE")
    draw_wrapped(pdf, DISCLAIMER, margin, disclaimer_y - 12, width - (2 * margin), "Helvetica", 7.2, 9.3, muted)

    pdf.setStrokeColor(line)
    pdf.line(margin, 37, width - margin, 37)
    pdf.setFont("Helvetica", 7.5)
    pdf.setFillColor(muted)
    pdf.drawString(margin, 24, "Apexnix Co., Ltd. | business@apexnix.com")
    pdf.drawRightString(width - margin, 24, "Bed frame sizing confirmation checklist | Page 1 of 1")

    pdf.showPage()
    pdf.save()
    print(OUTPUT)


if __name__ == "__main__":
    build_pdf()
