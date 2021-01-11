using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ExchangeOffice.Database.Migrations
{
    public partial class ExchangeTransaction2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ExchangeTransactions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ExchangeRateId = table.Column<int>(type: "int", nullable: true),
                    Amount = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExchangeTransactions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ExchangeTransactions_ExchangeRates_ExchangeRateId",
                        column: x => x.ExchangeRateId,
                        principalTable: "ExchangeRates",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ExchangeTransactions_ExchangeRateId",
                table: "ExchangeTransactions",
                column: "ExchangeRateId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ExchangeTransactions");
        }
    }
}
