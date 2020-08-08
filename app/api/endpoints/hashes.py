from urllib.parse import urlparse

import requests
from fastapi import APIRouter, HTTPException

from app.schemas import Hashes

router = APIRouter()


def validate_url(url: str) -> bool:
    parsed = urlparse(url)

    valid_paths = [
        "",
        "/",
    ]
    if parsed.path in valid_paths:
        return True

    valid_tails = ["/favicon.ico", "/favicon.png", "/touch-icon.png"]
    for tail in valid_tails:
        if parsed.path.endswith(tail):
            return True

    return False


def get_response(url: str) -> requests.Response:
    response = requests.get(url, verify=False)
    response.raise_for_status()
    return response


@router.get(
    "/calculate",
    response_model=Hashes,
    response_description="Hashes of an HTML or favicon",
    summary="Get hashes of an HTML or favicon",
    description="Returns hashes of an HTML or favicion",
)
def calculate(url: str):
    if not validate_url(url):
        raise HTTPException(status_code=400, detail=f"{url} is not a valid URL")

    try:
        response = get_response(url)
    except requests.HTTPError as e:
        raise HTTPException(status_code=500, detail=f"Cannot get {url}: {e}")

    return Hashes.build_from_response(response)
