import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

const createApiService = asyncHandler(async (req, res) => {
  const {
    publisherId,
    name,
    description,
    category,
    tags,
    baseUrl,
    docs,
    availableRoute,
    applicableFilter,
    termsOfUse,
    visibility,
    isLive,
    subscriptionPerMonth,
    subscriptionPerQuatre,
    subscriptionPerHalfYear,
    subscriptionPerYear,
    isPaid,
    isSecured,
    rateLimit,
  } = req.body;

  if (
    [
      publisherId,
      name,
      category,
      baseUrl,
      visibility,
      isLive,
      isPaid,
      isSecured,
      rateLimit,
    ].some((field) => {
      return (
        field === undefined ||
        field === null ||
        (typeof field === "string" && field.trim() === "")
      );
    })
  ) {
    throw new ApiError(400, "All fields are required");
  }

  let allApiServices;
  async function main() {
    await prisma.ApiService.create({
      data: {
        publisherId,
        name,
        description,
        category,
        tags,
        docs,
        baseUrl,
        availableRoute,
        applicableFilter,
        termsOfUse,
        visibility,
        isLive,
        subscriptionPerMonth,
        subscriptionPerQuatre,
        subscriptionPerHalfYear,
        subscriptionPerYear,
        isPaid,
        isSecured,
        rateLimit,
      },
    });

    allApiServices = await prisma.ApiService.findMany({});
  }

  main()
    .then(async () => {
      await prisma.$disconnect();
      res
        .status(201)
        .json(
          new ApiResponse(
            200,
            allApiServices,
            "API Service registered successfully !!",
          ),
        );
    })
    .catch(async (e) => {
      console.error("Prisma Error:", e); // Add this line to see the actual error
      await prisma.$disconnect();
      throw new ApiError(
        500,
        "Something went wrong while registering the API service",
      );
    });
});

const getApiServises = asyncHandler(async (req, res) => {
  let apiServices;
  async function main(id) {
    apiServices = await prisma.ApiService.findMany({});
  }
  main()
    .then(async () => {
      await prisma.$disconnect();
      res
        .status(201)
        .json(
          new ApiResponse(
            200,
            apiServices,
            "API Service registered successfully !!",
          ),
        );
    })
    .catch(async (e) => {
      console.error("Prisma Error:", e); // Add this line to see the actual error
      await prisma.$disconnect();
      throw new ApiError(
        500,
        "Something went wrong while registering the API service",
      );
    });
});

const getApiServise = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw new ApiError(400, "Can't find id in request properly");
  }
  let apiService;
  async function main(id) {
    apiService = await prisma.ApiService.findUnique({
      where: {
        id: id,
      },
    });
  }

  main(id)
    .then(async () => {
      await prisma.$disconnect();
      res
        .status(201)
        .json(
          new ApiResponse(
            200,
            apiService,
            "API Service fatched successfully !!",
          ),
        );
    })
    .catch(async (e) => {
      console.error("Prisma Error:", e);
      await prisma.$disconnect();
      throw new ApiError(
        500,
        "Something went wrong while registering the API service",
      );
    });
});

export { createApiService, getApiServises, getApiServise };
