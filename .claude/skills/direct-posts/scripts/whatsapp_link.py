#!/usr/bin/env python3
"""Gera link wa.me com mensagem pronta para o WhatsApp de cadastro da Direct.

Uso: python3 whatsapp_link.py "Mensagem" [numero]
O número padrão é o de cadastro (85 99224-5035).
"""
import re
import sys
import urllib.parse

DEFAULT_NUMBER = "5585992245035"


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    message = sys.argv[1]
    number = re.sub(r"\D", "", sys.argv[2]) if len(sys.argv) > 2 else DEFAULT_NUMBER
    if not number.startswith("55"):
        number = "55" + number
    print(f"https://wa.me/{number}?text={urllib.parse.quote(message)}")


if __name__ == "__main__":
    main()
